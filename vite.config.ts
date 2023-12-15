import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
				}),
			],
		},
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, 'src'),
			},
		],
	},

	plugins: [
		vue(),
		WindiCSS(),
		legacy({
			targets: ['cover 99.5%'],
		}),
	],
	optimizeDeps: {
		include: ['core-js'],
	},
	server: {
		port: 80,
		host: '0.0.0.0',
	},
})
