import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost', // 本地服务器监听的域名（或 IP），默认就是 localhost
    port: 8080, // 本地服务器监听的端口，浏览器访问 http://localhost:8080
    proxy: {
      // 配置接口代理，解决开发时的跨域问题
      // 含义：
      // 1. 当你在代码里发请求 /api/xxx 时，Vite 会把请求转发到 http://api-driver.marsview.cn/api/xxx
      // 2. 浏览器看到的前缀依旧是 /api，避免了 CORS 错误
      '/api': 'http://api-driver.marsview.cn'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()]
})
