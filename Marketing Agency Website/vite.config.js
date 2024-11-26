import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "swiper/swiper-bundle.min.css"; @import "swiper/swiper.min.css"; @import "swiper/components/pagination/pagination.min.css";`,
      },
    },
  },
})
