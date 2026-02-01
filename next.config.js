/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 静态导出，用于 GitHub Pages
  // 若仓库名为 real-time-fund，Pages 地址为 xxx.github.io/real-time-fund/ 时可取消下一行注释
  // basePath: process.env.NODE_ENV === 'production' ? '/real-time-fund' : '',
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
