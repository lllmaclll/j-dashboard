import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'; // ให้ TypeScript รู้จักโมดูล Node (path, fs, etc.) | bun add -d @types/node
import { reactRouter } from '@react-router/dev/vite';
// import { fileURLToPath } from 'node:url';

// กรณี __dirname ไม่มีใน ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// __dirname = "path ที่ไฟล์นี้อยู่"
// path คือ	ตัวช่วยจัดการ string path ให้ถูกต้องทุกระบบ

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    reactRouter(),
    tailwindcss(),
  ],
  resolve: { // resolve = เป็นการตั้งค่าที่บอก Vite ว่าเวลา "resolve" (ค้นหา) ไฟล์หรือโมดูล ให้ใช้กฎพิเศษด้วยได้
    alias: { // alias = คือการ "ตั้งชื่อเล่น" (shortcuts) ให้ path ในโปรเจกต์เรา เวลา import จะได้ไม่ต้องพิมพ์ path ยาว ๆ แบบ ../../../ ที่มันน่ารำคาญ
      // '@app': path.resolve(__dirname, './app'), // '@src' คือ "ชื่อย่อ" ของ path ที่เราตั้งเอง เวลา import ไฟล์ | // './src' คือ "ตำแหน่งจริง" บน disk ที่จะชี้ไป | // ตัว path alias นี้ทำให้เวลา import ไฟล์ ไม่ต้องเขียน ../../../ ย้อน path อีก | // Vite จะใช้ค่า alias นี้ map หาไฟล์จริงตอน dev และ build
      '@app': path.resolve(__dirname, './app'),
      '@public': path.resolve(__dirname, './public'),
      '@react-router': path.resolve(__dirname, './.react-router'),
      '@components': path.resolve(__dirname, './app/components'),
      '@routes': path.resolve(__dirname, './app/routes'),
      '@assets': path.resolve(__dirname, './app/assets'),
    },
  },
})
