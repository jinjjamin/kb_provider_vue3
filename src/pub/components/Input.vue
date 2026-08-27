<script setup>
	import {ref} from 'vue';

	const keyword = defineModel();

	defineProps({
		type : String,
		placeholder : String,
		classList : String,
		keyword : String
	});

</script>

<template>
	<input :type="type" class="inpText" :class="classList" :placeholder="placeholder" v-model="keyword">
</template>