<script setup>
	import {ref} from 'vue';

	const selectedOption = defineModel();

	defineProps({
		optionLists : {
			type : Array,
			default : () => []
		}
	});
</script>

<template>
    <span class="selectboxWrap">
		<select v-model="selectedOption">
			<option value="">선택</option>
			<option v-for="optionList in optionLists" :key="optionList.index" :value="optionList.value">
				{{optionList.value}}
			</option>
		</select>
	</span>
</template>