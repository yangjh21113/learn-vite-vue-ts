import axios, { AxiosInstance } from 'axios'
import { handleError } from './handleError'

function createRequestInstance(url: string): AxiosInstance {
	const instance = axios.create({
		timeout: 1000 * 60 * 5, // 超时时间
		withCredentials: true, // 允许跨域携带cookie
		baseURL: url, // 请求地址
	})

	instance.interceptors.response.use(
		async res => {
			return res
		},
		async err => {
			err = await handleError(err)
			return Promise.reject(err)
		},
	)
	return instance
}

export default createRequestInstance
