import { createI18n } from 'vue-i18n'
import enData from './en'
import zhData from './zh'

const i18n = createI18n({
	messages: {
		en: enData,
		zh: zhData,
	},
	locale: 'zh',
})

export default i18n

export const $i18n = i18n.global.t.bind(i18n.global)
