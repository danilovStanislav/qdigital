<template>
	<TheHeader>Library - Info</TheHeader>
	<section class="mt-[60px] max-h-[] p-5 flex flex-col items-start" v-if="book">
		<h1 class="mb-2 text-lg leading-5">
			{{ book.title }}
		</h1>
		<div
			class="py-1 px-2 mb-2 bg-[#e1f1f6] border border-[#89cbdf] rounded-full text-xs text-[#004a70]"
		>
			{{ book.authors }}
		</div>
		<p class="text-[14px] leading-5 text-[#565656]">{{ book.description }}</p>
	</section>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useAddedBooksStore } from '../stores/useAddedBooksStore'

const route = useRoute()
const router = useRouter()
const addedBooksStore = useAddedBooksStore()

onMounted(() => {
	if (!addedBooksStore.addedBooksList.length) {
		router.replace({ name: 'AddedBooks' })
	}
})
const book = computed(() => addedBooksStore.getBookByIndex(route.params.bookId))
</script>
