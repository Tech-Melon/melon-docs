/**
 * 文档站截图优化：缩放 + WebP 压缩。
 *
 * 用法：node scripts/optimize-images.mjs
 * 默认处理 public/screenshots/** 与 public 根下 demo_* / logo
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')

/** 文档正文展示宽度约 800–1000px，2x 屏取 1440 足够 */
const MAX_WIDTH = 1440
const WEBP_QUALITY = 78
const JPEG_QUALITY = 82

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp'])

async function walk(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const ent of entries) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue
      out.push(...(await walk(full)))
    } else {
      out.push(full)
    }
  }
  return out
}

function shouldProcess(file) {
  const rel = path.relative(publicDir, file).replace(/\\/g, '/')
  const ext = path.extname(file).toLowerCase()
  if (!IMAGE_EXTS.has(ext)) return false
  // 已是优化产物跳过二次压
  if (rel.includes('/.optimized/')) return false
  if (rel.startsWith('screenshots/')) return true
  if (/^demo_/i.test(path.basename(file))) return true
  if (path.basename(file) === 'logo.png') return true
  if (path.basename(file) === 'clean_cache_guide.png') return true
  return false
}

async function optimizeOne(file) {
  const ext = path.extname(file).toLowerCase()
  const base = file.slice(0, -ext.length)
  const webpOut = `${base}.webp`
  const inputStat = await fs.stat(file)

  // GIF 动画：sharp 会压成静态帧；demo_login.gif 用 webp 静帧可接受，或跳过 gif
  const isGif = ext === '.gif'

  let pipeline = sharp(file, { animated: false, limitInputPixels: false })
  const meta = await pipeline.metadata()
  const width = meta.width || 0

  if (width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: 'inside',
    })
  }

  // 截图类用 WebP；logo 也转 WebP（md 里仍可指向 webp）
  await pipeline
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toFile(webpOut)

  const outStat = await fs.stat(webpOut)
  const ratio = ((1 - outStat.size / inputStat.size) * 100).toFixed(1)
  return {
    file: path.relative(publicDir, file),
    webp: path.relative(publicDir, webpOut),
    before: inputStat.size,
    after: outStat.size,
    ratio,
    width,
    isGif,
  }
}

function fmt(n) {
  if (n < 1024) return `${n}B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)}KB`
  return `${(n / 1024 / 1024).toFixed(2)}MB`
}

async function main() {
  const all = await walk(publicDir)
  const targets = all.filter(shouldProcess)
  if (!targets.length) {
    console.log('No images to optimize.')
    return
  }

  let beforeTotal = 0
  let afterTotal = 0
  const rows = []

  for (const file of targets) {
    try {
      const r = await optimizeOne(file)
      beforeTotal += r.before
      afterTotal += r.after
      rows.push(r)
      console.log(
        `✓ ${r.file} (${r.width}px, ${fmt(r.before)}) → ${r.webp} (${fmt(r.after)}, -${r.ratio}%)`,
      )
    } catch (err) {
      console.error(`✗ ${path.relative(publicDir, file)}:`, err.message)
    }
  }

  console.log('\n--- Summary ---')
  console.log(`files: ${rows.length}`)
  console.log(
    `size: ${fmt(beforeTotal)} → ${fmt(afterTotal)} (saved ${fmt(beforeTotal - afterTotal)})`,
  )
  console.log(
    '\nNext: point Markdown to .webp paths; keep PNG originals optional or delete after verify.',
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
