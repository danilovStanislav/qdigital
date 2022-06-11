import { ref } from 'vue'
import axios from '../plugins/axios'

export const useAddBook = () => {
	const result = ref(null)
	const loading = ref(false)
	const error = ref(false)

	const addBook = async ({ title, authors, description, uid }) => {
		let authToken = JSON.parse(localStorage.getItem('authToken'))
		try {
			loading.value = true
			const { data } = await axios({
				method: 'POST',
				url: 'book/add',
				headers: {
					Authorization: authToken,
				},
				params: { title, authors, description, uid, favorite: 0 },
			})
		} catch (err) {
			console.error(err)
			error.value = true
		} finally {
			loading.value = false
		}
	}

	return { addBook, result, loading, error }
}
