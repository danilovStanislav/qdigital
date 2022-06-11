import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../plugins/axios'

export const useSignup = () => {
	const result = ref(null)
	const loading = ref(false)
	const error = ref(false)
	const router = useRouter()

	const signup = async ({ name, email, password, password_confirmation }) => {
		try {
			const { data } = await axios.post('auth/signup', {
				name,
				email,
				password,
				password_confirmation,
			})
			console.log(data)

			if (data.status) {
				router.replace({ name: 'LoginPage' })
			} else {
				error.value = data.errors
			}
		} catch (err) {
			console.error(err)
			error.value = true
		} finally {
			loading.value = false
		}
	}

	return { signup, result, loading, error }
}
