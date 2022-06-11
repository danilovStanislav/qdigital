<template>
	<section class="h-full mt-[60px] relative">
		<div
			class="w-full h-[60px] p-3 flex items-center justify-center bg-[#002538] fixed top-0 left-0 z-20"
		>
			<svg
				class="absolute top-1/2 left-5 -translate-y-1/2"
				width="22"
				height="22"
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M9.22 0.333344C4.43353 0.333344 0.553329 4.21354 0.553329 9.00001C0.553329 13.7865 4.43353 17.6667 9.22 17.6667C14.0065 17.6667 17.8867 13.7865 17.8867 9.00001C17.8867 4.21354 14.0065 0.333344 9.22 0.333344ZM9.22 1.70001C12.1732 1.69731 14.8371 3.47419 15.9691 6.2018C17.1011 8.92941 16.4782 12.0704 14.3909 14.1595C12.3036 16.2487 9.16326 16.8745 6.43462 15.745C3.70597 14.6155 1.92666 11.9532 1.92666 9.00001C1.94488 4.9785 5.1985 1.7219 9.22 1.70001ZM16.7533 15.58L21.6667 20.5267C21.8346 20.6958 21.8995 20.9416 21.837 21.1716C21.7745 21.4016 21.5941 21.5807 21.3637 21.6416C21.1333 21.7025 20.8879 21.6358 20.72 21.4667L15.8067 16.52L16.7533 15.58Z"
					fill="black"
				/>
				<mask
					id="mask0_801_356"
					style="mask-type: alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="22"
					height="22"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.22 0.333344C4.43353 0.333344 0.553329 4.21354 0.553329 9.00001C0.553329 13.7865 4.43353 17.6667 9.22 17.6667C14.0065 17.6667 17.8867 13.7865 17.8867 9.00001C17.8867 4.21354 14.0065 0.333344 9.22 0.333344ZM9.22 1.70001C12.1732 1.69731 14.8371 3.47419 15.9691 6.2018C17.1011 8.92941 16.4782 12.0704 14.3909 14.1595C12.3036 16.2487 9.16326 16.8745 6.43462 15.745C3.70597 14.6155 1.92666 11.9532 1.92666 9.00001C1.94488 4.9785 5.1985 1.7219 9.22 1.70001ZM16.7533 15.58L21.6667 20.5267C21.8346 20.6958 21.8995 20.9416 21.837 21.1716C21.7745 21.4016 21.5941 21.5807 21.3637 21.6416C21.1333 21.7025 20.8879 21.6358 20.72 21.4667L15.8067 16.52L16.7533 15.58Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask0_801_356)">
					<rect x="-1" y="-1" width="24" height="24" fill="#0079B8" />
				</g>
			</svg>

			<input
				@input="debounceInput"
				class="w-full py-[6px] pl-9 pr-8 rounded-[3px] leading-none"
				v-model="searchQuery"
				type="text"
				placeholder="Book title"
			/>
			<svg
				@click="clearSearch"
				class="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.00003 15.1111C4.07267 15.1111 0.888916 11.9274 0.888916 8C0.888916 4.07264 4.07267 0.888885 8.00003 0.888885C11.9274 0.888885 15.1111 4.07264 15.1111 8C15.1111 9.88598 14.3619 11.6947 13.0283 13.0283C11.6947 14.3619 9.88601 15.1111 8.00003 15.1111ZM8.00003 1.77777C4.56359 1.77777 1.7778 4.56356 1.7778 8C1.7778 11.4364 4.56359 14.2222 8.00003 14.2222C11.4365 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4365 1.77777 8.00003 1.77777ZM10.8756 5.84L8.71558 8L10.8134 10.0844C10.9644 10.2608 10.9542 10.5236 10.7901 10.6878C10.6259 10.852 10.363 10.8621 10.1867 10.7111L8.08003 8.60444L5.96003 10.7244C5.85141 10.8513 5.68086 10.9065 5.51851 10.8675C5.35615 10.8284 5.22939 10.7016 5.19033 10.5393C5.15128 10.3769 5.20653 10.2064 5.33336 10.0978L7.4578 8L5.28892 5.80444C5.1379 5.6281 5.14806 5.36524 5.31222 5.20108C5.47639 5.03692 5.73924 5.02676 5.91558 5.17777L8.08892 7.35111L10.2489 5.21333C10.4253 5.06232 10.6881 5.07247 10.8523 5.23664C11.0164 5.4008 11.0266 5.66366 10.8756 5.84Z"
					fill="black"
				/>
				<mask
					id="mask0_801_344"
					style="mask-type: alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.00003 15.1111C4.07267 15.1111 0.888916 11.9274 0.888916 8C0.888916 4.07264 4.07267 0.888885 8.00003 0.888885C11.9274 0.888885 15.1111 4.07264 15.1111 8C15.1111 9.88598 14.3619 11.6947 13.0283 13.0283C11.6947 14.3619 9.88601 15.1111 8.00003 15.1111ZM8.00003 1.77777C4.56359 1.77777 1.7778 4.56356 1.7778 8C1.7778 11.4364 4.56359 14.2222 8.00003 14.2222C11.4365 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4365 1.77777 8.00003 1.77777ZM10.8756 5.84L8.71558 8L10.8134 10.0844C10.9644 10.2608 10.9542 10.5236 10.7901 10.6878C10.6259 10.852 10.363 10.8621 10.1867 10.7111L8.08003 8.60444L5.96003 10.7244C5.85141 10.8513 5.68086 10.9065 5.51851 10.8675C5.35615 10.8284 5.22939 10.7016 5.19033 10.5393C5.15128 10.3769 5.20653 10.2064 5.33336 10.0978L7.4578 8L5.28892 5.80444C5.1379 5.6281 5.14806 5.36524 5.31222 5.20108C5.47639 5.03692 5.73924 5.02676 5.91558 5.17777L8.08892 7.35111L10.2489 5.21333C10.4253 5.06232 10.6881 5.07247 10.8523 5.23664C11.0164 5.4008 11.0266 5.66366 10.8756 5.84Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask0_801_344)">
					<rect width="16" height="16" fill="#737373" />
				</g>
			</svg>
		</div>
		<div
			v-if="searchResults.length === 0 && !loading && !error"
			class="absolute top-1/3 left-1/2 -translate-x-1/2 text-center font-bold text-[#565656]"
		>
			Type the title of a book above 👆
		</div>
		<ul v-if="searchResults.length">
			<BookItem
				class="mb-[1px]"
				v-for="(search, index) in searchResults"
				:key="search.id"
				:uid="search.id"
				:serialNum="index + 1"
				:title="search.volumeInfo.title"
				:authors="authorsToString(search.volumeInfo.authors)"
				:description="search.volumeInfo.description"
			>
				<PrimaryButton
					@click.prevent="addBookToLibrary(search)"
					class="bg-[#62a420] ml-auto max-w-[74px] w-full"
					>add</PrimaryButton
				>
			</BookItem>
		</ul>
		<LoadingSpinner
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			v-if="loading"
		/>
		<SearchError v-if="error" />
		<ModalWindow
			v-if="showModal"
			:modalTitle="'Add book'"
			:modalText="'Are you sure you want to add this book?'"
			@submitModal="addBookSubmit"
			@closeModal="addBookCancel"
		/>
	</section>
	<TheFooter />
</template>

<script setup>
import BookItem from '../components/BookItem.vue'
import TheFooter from '../components/TheFooter.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import PrimaryButton from '../components/PrimaryButton.vue'
import SearchError from '../components/SearchError.vue'
import ModalWindow from '../components/ModalWindow.vue'
import { useSearchBook } from '../composables/useSearchBook'
import { useAddedBooksStore } from '../stores/useAddedBooksStore'
import { useAddBook } from '../composables/useAddBook'
import { ref, computed } from 'vue'
import debounce from 'lodash.debounce'

const searchQuery = ref('')
const showModal = ref(false)
const bookToBeAdded = ref(null)
const { searchBook, result: searchResults, loading, error } = useSearchBook()
const { addBook, result: addBookResult } = useAddBook()
const addedBooksStore = useAddedBooksStore()

const clearSearch = () => (searchQuery.value = '')

const authorsToString = authors => {
	if (typeof authors === 'string') {
		return authors
	}
	if (Array.isArray(authors)) {
		return authors.join(', ')
	}
}

const debounceInput = debounce(function () {
	searchBook(searchQuery.value)
}, 1000)

const addBookToLibrary = book => {
	bookToBeAdded.value = {
		uid: book.id,
		title: book.volumeInfo.title,
		authors: authorsToString(book.volumeInfo.authors),
		description: book.volumeInfo.description,
	}
	showModal.value = true
}

const addBookSubmit = () => {
	addBook(bookToBeAdded.value)
	addedBooksStore.setAddedBooksList()
	showModal.value = false
}

const addBookCancel = () => {
	bookToBeAdded.value = null
	showModal.value = false
}
</script>
