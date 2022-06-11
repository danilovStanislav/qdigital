<template>
	<section
		class="max-w-[280px] w-full mx-auto p-3 h-full flex flex-col items-start justify-center"
	>
		<h1 class="text-3xl mb-[50px]">Login</h1>
		<form class="w-full">
			<FormInput
				class="mb-6"
				v-model="user.email"
				:inputType="'email'"
				:inputPlaceholder="'Email'"
			/>
			<FormInput
				class="mb-[60px]"
				v-model="user.password"
				:inputType="'password'"
				:inputPlaceholder="'Password'"
			/>
			<FormButton
				@click.prevent="loginSubmit"
				class="bg-[#0079b8] w-full mb-5"
				:buttonText="'log in'"
			/>
			<router-link class="w-full block" :to="{ name: 'SignupPage' }">
				<FormButton class="bg-[#004366] w-full" :buttonText="'sign up'" />
			</router-link>
		</form>
		<Teleport to="body">
			<AlertMessage v-if="error" :alertMessage="'login error'" />
		</Teleport>
	</section>
</template>

<script setup>
import FormInput from '../components/FormInput.vue'
import FormButton from '../components/FormButton.vue'
import AlertMessage from '../components/AlertMessage.vue'
import { useLogin } from '../composables/useLogin'
import { reactive } from 'vue'

const user = reactive({
	email: '',
	password: '',
})

const { login, result, error } = useLogin()

const loginSubmit = () => {
	login(user)

	user.email = ''
	user.password = ''
}
</script>
