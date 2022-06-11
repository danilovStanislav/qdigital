<template>
	<TheHeader>Library - Favorite</TheHeader>
	<section class="mt-[60px] h-full relative">
		<ul class="w-full" v-if="favoriteList?.length">
			<BookItem
				v-for="(favorite, index) in favoriteList"
				:key="favorite.id"
				:uid="favorite.uid"
				:serialNum="index + 1"
				:title="favorite.title"
				:authors="favorite.authors"
				:description="favorite.description"
				:favorite="favorite.favorite"
			>
				<ButtonsPanel
					:bookId="favorite.id"
					@addToFavorite="addToFavorite(favorite.id)"
					@deleteBook="deleteBook(favorite)"
				/>
			</BookItem>
		</ul>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
			v-if="!favoriteList?.length"
		>
			Nothing founded. Add your favorite books!
		</div>
		<ModalWindow
			v-if="showModal"
			:modalTitle="'Delete book'"
			:modalText="'Are you sure you want to delete this book?'"
			@submitModal="submitDeleteBook"
			@closeModal="showModal = false"
		/>
	</section>
	<TheFooter />
</template>

<script setup>
import BookItem from '../components/BookItem.vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import ButtonsPanel from '../components/ButtonsPanel.vue'
import ModalWindow from '../components/ModalWindow.vue'
import { ref, computed, onMounted } from 'vue'
import { useAddedBooksStore } from '../stores/useAddedBooksStore'

const showModal = ref(false)
const bookIdToBeDeleted = ref(null)
const addedBooksStore = useAddedBooksStore()

onMounted(() => {
	if (!addedBooksStore.addedBooksList.length) {
		addedBooksStore.setAddedBooksList()
	}
})

const favoriteList = computed(() => addedBooksStore.getFavoriteBooksList)

const deleteBook = book => {
	showModal.value = true
	bookIdToBeDeleted.value = book.id
}

const submitDeleteBook = () => {
	addedBooksStore.deleteBook(bookIdToBeDeleted.value)
	showModal.value = false
}

const addToFavorite = id => {
	addedBooksStore.addToFavorite(id)
}
</script>
