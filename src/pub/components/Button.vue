<script setup>
	defineProps({
		buttonDefault : {
			type : Boolean,
			default : true
		},
		buttonText : String,
		buttonColor : String,
		buttonType : String,
		buttonSize : String
	});
</script>

<template>
    <a href="#" :class="[{ btns: buttonDefault }, buttonColor, buttonType, buttonSize]">
		<span>{{buttonText}}</span>
	</a>
</template>