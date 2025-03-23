import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果你的仓库名不是 username.github.io，而是一个普通项目名
  // 则需要添加：
  // basePath: '/your-repo-name',
}

export default nextConfig