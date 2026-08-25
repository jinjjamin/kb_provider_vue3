<script setup>
	import {ref} from 'vue';

	defineProps({
		totalPage : Number
	});

	const currentPage = ref(1);
	const pageMove = (page)=> {
		event.preventDefault();

		currentPage.value = page;
	}

</script>

<template>
	<div class="pagination">
		<a href="#" class="btnPage first" @click="pageMove(1)">처음 페이지로 이동</a>
		<a href="#" class="btnPage prev" @click="pageMove(currentPage-1)" :disabled="currentPage === 1">이전 페이지로 이동</a>
		<span>
			<a href="#" v-for="page in totalPage" :key="page" @click="pageMove(page)" :class="{ current: currentPage === page }">{{page}}</a>
		</span>
		<a href="#" class="btnPage next" @click="pageMove(currentPage+1)" :disabled="currentPage === totalPage">다음 페이지로 이동</a>
		<a href="#" class="btnPage last"  @click="pageMove(totalPage)">마지막 페이지로 이동</a>
	</div>
</template>