<template>
	<input
		class="max-w-[255px] px-[6px] py-1 text-xs border-b-[#9a9a9a] border-b outline-none leading-4"
		:value="props.modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		:type="props.inputType"
		:placeholder="props.inputPlaceholder"
	/>
</template>

<script setup>
const props = defineProps(['modelValue', 'inputType', 'inputPlaceholder'])
const emits = defineEmits(['update:modelValue'])
</script>
