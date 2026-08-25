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
	<span class="checkboxWrap">
		<input type="checkbox" :id="id" :name="name" :checked="checked">
		<label :for="id">
			<span v-if="label">{{label}}</span>
		</label>
	</span>
</template>