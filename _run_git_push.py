import subprocess
import sys

COMMANDS = [
    ['git', 'add', '.'],
    ['git', 'commit', '-m', 'docs: 全面升级项目说明文档以同步微博监控Pro最新特性'],
    ['git', 'push']
]

def run():
    for i, cmd in enumerate(COMMANDS):
        print(f"[{i+1}/{len(COMMANDS)}] 执行: {' '.join(cmd)}")
        result = subprocess.run(cmd, check=False)
        if result.returncode != 0:
            print(f"命令失败，退出码: {result.returncode}")
            return result.returncode
    return 0

if __name__ == "__main__":
    sys.exit(run())
