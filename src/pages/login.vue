<template>
	<div @click="toAccount">toAccount</div>
	<SvgIcon name="vue"></SvgIcon>
	<h1>{{ $t('name') }}</h1>
	<button @click="$i18n.locale = 'zh'">中文</button>
	<button @click="$i18n.locale = 'en'">英文</button>
	<router-view></router-view>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'

const router = useRouter()
function toAccount() {
	router.push({
		name: 'account',
	})
}
</script>
