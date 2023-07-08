import { defineConfig, type UserConfig, type ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA, type VitePWAOptions } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';

type Mode = 'production' | 'analyze';

const PWA_512 = 'pwa-512x512.png';

const pwaSettings: Partial<VitePWAOptions> = {
  devOptions: {
    enabled: false
  },
  registerType: 'autoUpdate',
  includeAssets: ['vite.svg', 'apple-touch-icon.png'],
  manifest: {
    name: 'vite spa',
    short_name: 'VS',
    description: 'single page application based on vite, react, typescript',
    background_color: '#242424',
    orientation: 'portrait',
    theme_color: '#242424',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: PWA_512,
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: PWA_512,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: PWA_512,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  }
};

const plugins = [react(), tsconfigPaths(), VitePWA(pwaSettings)];

function serve(): UserConfig {
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
    plugins
  };
}

function build(mode: Mode): UserConfig {
  if (mode === 'analyze') {
    return {
      plugins: [...plugins, visualizer({ open: true })]
    };
  }

  return {
    plugins
  };
}

export default defineConfig((params: ConfigEnv): UserConfig => {
  return params.command === 'serve' ? serve() : build(params.mode as Mode);
});
