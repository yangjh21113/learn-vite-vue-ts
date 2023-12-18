import { isUndef } from './is'

// 正式环境
export const PROD_ENV = {
	SERVER_URL: 'https://xxx.com/api', // 服务地址
	IS_DEV: 'false', // 是否是测试环境
}

// 测试环境
export const DEV_ENV = {
	SERVER_URL: 'https://xxx-test.com/api',
	IS_DEV: 'true',
}

// 假设测试环境的域名是 https://xxx-test.com
const isDev = process.env.NODE_ENV === 'development' || ['xxx-test.com'].includes(location.host)

export type EnvKey = keyof typeof PROD_ENV

// 调用这个函数获取当前的环境变量
export function getProcessEnv(key: EnvKey): string | void {
	if (isDev) {
		if (!isUndef(DEV_ENV[key])) {
			return DEV_ENV[key]
		}
		return ''
	}
	if (!isUndef(PROD_ENV[key])) {
		return PROD_ENV[key]
	}
}
