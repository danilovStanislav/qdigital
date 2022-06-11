<template>
	<button class="p-3 text-xs uppercase text-white text-center rounded-sm">
		{{ props.buttonText }}
	</button>
</template>

<script setup>
const props = defineProps(['buttonText'])
</script>
