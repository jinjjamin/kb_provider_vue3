<script setup>
	import {ref} from 'vue';

	defineProps({
		label : String,
		id : String,
		name : String,
		checked : {
			default : false,
			type : Boolean
		}
	});

</script>

<template>
	<span class="radioWrap">
		<input type="radio" :id="id" :name="name" :checked="checked">
		<label :for="id">
			<span v-if="label">{{label}}</span>
		</label>
	</span>
</template>