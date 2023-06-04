import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: 'spa.vite.ru',
      https: {
        key: 'ssl/key.pem',
        cert: 'ssl/cert.pem'
      },
      open: true
    },
    plugins: [react()]
  };
});
