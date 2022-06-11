import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth } from './checkAuth'
import SignupPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'
import BooksSearch from '../views/BooksSearch.vue'
import AddedBooks from '../views/AddedBooks.vue'
import FavoriteBooks from '../views/FavoriteBooks.vue'
import BookInfo from '../views/BookInfo.vue'

const routes = [
	{
		path: '/',
		beforeEnter: checkAuth,
	},
	{
		path: '/signup',
		name: 'SignupPage',
		component: SignupPage,
	},
	{
		path: '/login',
		name: 'LoginPage',
		component: LoginPage,
	},
	{
		path: '/books-search',
		name: 'BooksSearch',
		component: BooksSearch,
		beforeEnter: checkAuth,
	},
	{
		path: '/added-books',
		name: 'AddedBooks',
		component: AddedBooks,
		beforeEnter: checkAuth,
	},
	{
		path: '/favorite-books',
		name: 'FavoriteBooks',
		component: FavoriteBooks,
		beforeEnter: checkAuth,
	},
	{
		path: '/book-info/:bookId',
		name: 'BookInfo',
		component: BookInfo,
		beforeEnter: checkAuth,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
