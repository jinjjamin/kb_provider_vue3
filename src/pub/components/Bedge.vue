<script setup>
	defineProps({
		colorType : String,
		text : String
	});
</script>

<template>
	<span class="sticker" :class="colorType">{{text}}</span>
</template>