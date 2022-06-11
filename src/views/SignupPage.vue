<template>
	<section
		class="max-w-[280px] w-full mx-auto my-auto p-3 h-full flex flex-col items-start justify-center"
	>
		<h1 class="text-3xl mb-[50px]">Registration</h1>
		<FormInput
			class="mb-6"
			v-model="user.name"
			@input="error = false"
			:inputType="'text'"
			:inputPlaceholder="'Name'"
		/>
		<FormInput
			class="mb-6"
			v-model="user.email"
			@input="error = false"
			:inputType="'email'"
			:inputPlaceholder="'Email'"
		/>
		<FormInput
			class="mb-6"
			v-model="user.password"
			@input="error = false"
			:inputType="'password'"
			:inputPlaceholder="'Password'"
		/>
		<FormInput
			class="mb-[60px]"
			v-model="user.password_confirmation"
			@input="error = false"
			:inputType="'password'"
			:inputPlaceholder="'Confirm password'"
		/>
		<FormButton
			@click.prevent="registrationSubmit"
			class="bg-[#0079b8] w-full mb-5"
			:buttonText="'submit'"
		/>
		<router-link class="w-full block" :to="{ name: 'LoginPage' }">
			<FormButton class="bg-[#004366] w-full" :buttonText="'login'" />
		</router-link>
		<Teleport to="body">
			<AlertMessage v-if="error" :alertMessage="'signup error'" />
		</Teleport>
	</section>
</template>

<script setup>
import FormInput from '../components/FormInput.vue'
import FormButton from '../components/FormButton.vue'
import AlertMessage from '../components/AlertMessage.vue'
import { useSignup } from '../composables/useSignup'
import { reactive } from 'vue'

const user = reactive({
	name: '',
	email: '',
	password: '',
	password_confirmation: '',
})

const { signup, result, error } = useSignup()

const registrationSubmit = () => {
	signup(user)

	user.name = ''
	user.email = ''
	user.password = ''
	user.password_confirmation = ''
}
</script>
