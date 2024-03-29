import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_APP_BASE_URL': JSON.stringify(process.env.VITE_APP_BASE_URL),
    'process.env.VITE_APP_RAZORPAY_KEY': JSON.stringify(process.env.VITE_APP_RAZORPAY_KEY)
  }
})
