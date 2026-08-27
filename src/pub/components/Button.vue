<script setup>
	defineProps({
		buttonDefault : {
			type : Boolean,
			default : true
		},
		buttonText : String,
		buttonColor : String,
		buttonType : String,
		buttonSize : String,
		buttonClass : String,
		link : String,
	});
</script>

<template>
    <a :href="link" :class="[{ btns: buttonDefault }, buttonColor, buttonType, buttonSize , buttonClass]">
		<span>{{buttonText}}</span>
	</a>
</template>