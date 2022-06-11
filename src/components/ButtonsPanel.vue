<template>
	<div class="ml-auto flex">
		<PrimaryButton @click="$emit('addToFavorite')" class="bg-[#62a420] h-6 w-6 mr-1"
			>F</PrimaryButton
		>
		<PrimaryButton @click="$emit('deleteBook')" class="bg-[#e62700] h-6 w-6 mr-1"
			>D</PrimaryButton
		>
		<router-link
			class="block"
			:to="{
				name: 'BookInfo',
				params: {
					bookId: props.bookId,
				},
			}"
		>
			<PrimaryButton class="bg-[#0079b8] h-6 w-6"> I </PrimaryButton>
		</router-link>
	</div>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue'

const props = defineProps(['bookId'])
const emits = defineEmits(['addToFavorite', 'deleteBook'])
</script>
