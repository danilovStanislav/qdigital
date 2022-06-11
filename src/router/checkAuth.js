export const checkAuth = (to, from, next) => {
	let token = localStorage.getItem('authToken')
	if (token) {
		return next()
	} else {
		return next({ name: 'LoginPage' })
	}
}
