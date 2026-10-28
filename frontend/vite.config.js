import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
  allowedHosts: [
    'jobbie-alb-1807267385.ap-south-1.elb.amazonaws.com'
  ]
}
})
