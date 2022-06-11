<template>
	<Teleport to="body">
		<div
			class="max-w-[335px] w-full p-5 bg-white z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3px]"
		>
			<h2
				class="flex items-center mb-[28px] font-light text-[22px] leading-none"
			>
				{{ props.modalTitle }}
				<svg
					@click="$emit('closeModal')"
					class="ml-auto cursor-pointer"
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.94002 7L13.4667 1.47333C13.6932 1.20883 13.678 0.814536 13.4317 0.56829C13.1855 0.322044 12.7912 0.306814 12.5267 0.533332L7.00002 6.06L1.47336 0.526666C1.21194 0.265251 0.788105 0.265251 0.52669 0.526666C0.265276 0.78808 0.265276 1.21192 0.52669 1.47333L6.06002 7L0.52669 12.5267C0.33644 12.6896 0.253569 12.9454 0.31215 13.1889C0.370732 13.4325 0.560877 13.6226 0.804411 13.6812C1.04794 13.7398 1.30376 13.6569 1.46669 13.4667L7.00002 7.94L12.5267 13.4667C12.7912 13.6932 13.1855 13.678 13.4317 13.4317C13.678 13.1855 13.6932 12.7912 13.4667 12.5267L7.94002 7Z"
						fill="#737373"
					/>
				</svg>
			</h2>
			<p class="mb-6 text-[14px] text-[#565656]">{{ props.modalText }}</p>
			<div class="flex items-center justify-end">
				<PrimaryButton
					class="bg-[#0079b8] mr-6 max-w-[75px] w-full"
					@click="$emit('submitModal')"
					>yes</PrimaryButton
				>

				<PrimaryButton
					class="bg-[#e62700] max-w-[75px] w-full"
					@click="$emit('closeModal')"
					>no</PrimaryButton
				>
			</div>
		</div>
		<div
			@click="$emit('closeModal')"
			class="w-full h-screen mt-[-60px] bg-[#313131] absolute top-0 left-0 z-40 opacity-[.85]"
		></div>
	</Teleport>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue'

const props = defineProps({ modalTitle: String, modalText: String })
const emits = defineEmits(['closeModal', 'submitModal'])
</script>
