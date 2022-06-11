import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../plugins/axios'

export const useLogin = () => {
	const result = ref(null)
	const loading = ref(false)
	const error = ref(false)
	const router = useRouter()

	const login = async ({ email, password }) => {
		try {
			const {data} = await axios.post('auth/login', {
				email,
				password,
			})

			let tokenType = data.data.token_type
			let token = data.data.access_token

			localStorage.setItem('authToken', JSON.stringify(`${tokenType} ${token}`))

			if (data.status) {
				router.replace({ name: 'BooksSearch' })
			}
		} catch (err) {
			console.error(err)
			error.value = true
		} finally {
			loading.value = false
		}
	}

	return { login, result, loading, error }
}
