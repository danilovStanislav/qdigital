import { ref } from 'vue'
import axios from '../plugins/axios'

export const useAddedBooksList = () => {
	const result = ref(null)
	const loading = ref(false)
	const error = ref(false)

	const getBooksList = async () => {
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
			
			result.value = data
		} catch (err) {
			console.error(err)
			error.value = true
		} finally {
			loading.value = false
		}
	}

	return { getBooksList, result, loading, error }
}
