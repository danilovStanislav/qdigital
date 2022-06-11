import { ref } from 'vue'
import axios from 'axios'

export const useSearchBook = () => {
	const result = ref([])
	const loading = ref(false)
	const error = ref(false)

	const searchBook = async query => {
		try {
			loading.value = true
			const { data } = await axios.get(
				'https://www.googleapis.com/books/v1/volumes',
				{
					params: {
						q: query,
					},
				}
			)
			result.value = [...data.items]
		} catch (err) {
			console.error(err)
			error.value = true
		} finally {
			loading.value = false
		}
	}

	return { searchBook, result, loading, error }
}
