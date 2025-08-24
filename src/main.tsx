import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { makeServer } from '@/mirage/server.ts'
import env from '@/config'

// 只在开发环境中启动 MirageJS
if (env.env === 'dev') {
  makeServer({ environment: 'dev' })
}

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App />
  // </StrictMode>
)
