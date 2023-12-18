<template>
	<div @click="toAccount">toAccount</div>
	<SvgIcon name="vue"></SvgIcon>
	<h1>{{ $t('name') }}</h1>
	<button @click="$i18n.locale = 'zh'">中文</button>
	<button @click="$i18n.locale = 'en'">英文</button>
	<br />
	<button @click="savaArray">存一个数组</button>

	<br />
	<button @click="getArray">取一个数组</button>
	<br />
	<h2>当前时间：{{ formatDate('Y-m-d', new Date()) }}</h2>
	<router-view></router-view>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'
import { setStorage, getStorageArray, StorageKeys } from '@/global/storage'
import { formatDate } from '@/global/date'
const router = useRouter()
function toAccount() {
	router.push({
		name: 'account',
	})
}

function savaArray() {
	setStorage(StorageKeys.NAME_LIST, JSON.stringify(['小明', '小红']))
}
function getArray() {
	const list = getStorageArray(StorageKeys.NAME_LIST)
	console.log(list)
}
</script>
