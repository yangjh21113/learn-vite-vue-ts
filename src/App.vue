<script setup lang="ts">
import { APIs } from './service/apiList'
import AxiosRequestError from './service/error'
import $api from './service/webRequest'

// 请求API类的静态函数
//$api.getUserInfo()
//	.then(() => {
//		//
//	})
//	.catch((err: AxiosRequestError) => {
//		// 使用console.dir()方法，可以在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示
//		// 所以别老用 console.log了
//		console.dir(err)
//	})

$api.get(APIs.login)
	.then(() => {
		//
	})
	.catch((err: AxiosRequestError) => {
		console.dir(err)
	})
</script>

<template>
	<RouterView />
</template>

<style lang="scss"></style>
