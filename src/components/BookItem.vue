<template>
	<li
		class="w-full py-4 px-3 pl-4 flex items-center bg-[#fafafa] border-[#cccccc] border text-[#565656] relative before:block before:absolute before:left-0 before:content-[''] before:bg-[#eeeeee] before:h-full before:w-[6px] text-[14px] leading-none hover:bg-[#eeeeee] duration-75 ease-in"
		:class="{ 'before:bg-[#62a420]': props.favorite }"
	>
		<div class="mr-5">{{ props.serialNum }}.</div>
		<div
			class="max-w-[190px] w-full mr-2 text-ellipsis overflow-hidden whitespace-nowrap"
		>
			{{ props.title }}
		</div>
		<slot></slot>
	</li>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue'
import { computed } from 'vue'

const props = defineProps([
	'uid',
	'serialNum',
	'title',
	'description',
	'authors',
	'favorite',
])
</script>
