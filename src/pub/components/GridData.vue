<script setup>
	import {ref} from 'vue';

	defineProps({
		headers : {
			type : Array,
			default : () => []
		},
		columns : {
			type : Array,
			default : () => []
		},
	});

</script>

<template>
	<div class="gridData">
		<table>
			<colgroup>
				<col v-for="header in headers" :key="header.key" :style="{width : header.width}" />
			</colgroup>
			<thead>
				<tr>
					<th scope="col" v-for="header in headers" :key="header.key">{{header.label}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="column in columns" :key="column.key">
					<td v-for="header in headers" :key="header.key" :class="{ tal: column[header.key]?.align == 'left'}">
						<a :href="column[header.key]?.href" v-if="column[header.key]?.href">
							{{column[header.key]?.text}}
						</a>
						<div v-else>
							{{column[header.key]?.text}}
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>