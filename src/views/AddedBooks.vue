<template>
	<TheHeader>Library</TheHeader>
	<section class="mt-[60px] h-full relative">
		<ul class="w-full" v-if="addedBooksList?.length">
			<BookItem
				v-for="(book, index) in addedBooksList"
				:key="book.id"
				:uid="book.uid"
				:serialNum="index + 1"
				:title="book.title"
				:authors="book.authors"
				:description="book.description"
				:favorite="book.favorite"
			>
				<ButtonsPanel
					:bookId="book.id"
					@addToFavorite="addToFavorite(book.id)"
					@deleteBook="deleteBook(book)"
				/>
			</BookItem>
		</ul>
		<div
			v-if="!addedBooksList?.length"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
		>
			Nothing founded. Add books that you want!
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
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import ButtonsPanel from '../components/ButtonsPanel.vue'
import PrimaryButton from '../components/PrimaryButton.vue'
import BookItem from '../components/BookItem.vue'
import ModalWindow from '../components/ModalWindow.vue'
import { ref, onMounted, computed } from 'vue'
import { useAddedBooksStore } from '../stores/useAddedBooksStore'

const showModal = ref(false)
const bookIdToBeDeleted = ref(null)
const addedBooksStore = useAddedBooksStore()

onMounted(() => {
	if (!addedBooksStore.addedBooksList.length) {
		addedBooksStore.setAddedBooksList()
	}
})
const addedBooksList = computed(() => addedBooksStore.addedBooksList)

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
