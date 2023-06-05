import {defineConfig} from "vite";
import path from 'path';
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const ALIAS: string[] = [
  'assets',
  'types',
  'utils',
  'routes',
  'layouts',
  'views',
  'components',
  'styles',
  'hooks',
  'constant',
];

const generateAlias = (config) =>
  config.map((c) => ({
    find: `@/${c}`,
    replacement: path.resolve(__dirname, `./src/${c}`),
  }));

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: generateAlias(ALIAS),
  },

  // Vite options tailored for Tauri development and only applied in `tauri network` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
}));