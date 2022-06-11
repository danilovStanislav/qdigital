import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../plugins/axios'

export const useAddedBooksStore = defineStore('addedBook', {
	state: () => ({
		addedBooksList: [],
		favoriteBooksList: [],
	}),

	getters: {
		getFavoriteBooksList: state =>
			state.addedBooksList.filter(i => i.favorite === 1),

		getBookByIndex: state => bookId =>
			state.addedBooksList.find(i => +i.id === +bookId),
	},

	actions: {
		async setAddedBooksList() {
			const loading = ref(false)
			const error = ref(false)

			let authToken = JSON.parse(localStorage.getItem('authToken'))

			try {
				loading.value = true
				const { data } = await axios({
					method: 'GET',
					url: 'book/list',
					headers: {
						Authorization: authToken,
					},
				})

				if (data.status) {
					this.addedBooksList = [...data.data]
				}
			} catch (err) {
				console.error(err)
				error.value = true
			} finally {
				loading.value = false
			}
		},

		async deleteBook(id) {
			try {
				let authToken = JSON.parse(localStorage.getItem('authToken'))

				const { data } = await axios({
					method: 'GET',
					url: `book/destroy/${id}`,
					headers: {
						Authorization: authToken,
					},
				})

				if (data.status) {
					this.setAddedBooksList()
				}
			} catch (err) {
				console.log(err)
			}
		},

		async addToFavorite(id) {
			try {
				let authToken = JSON.parse(localStorage.getItem('authToken'))

				const { data } = await axios({
					method: 'POST',
					url: `book/update/${id}`,
					headers: {
						Authorization: authToken,
					},
					params: { favorite: 1 },
				})

				if (data.status) {
					this.setAddedBooksList()
				}
			} catch (err) {
				console.log(err)
			}
		},
	},
})
