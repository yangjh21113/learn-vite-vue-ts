<template>
	<div @click="toAccount">toAccount</div>
	<SvgIcon name="vue"></SvgIcon>
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
