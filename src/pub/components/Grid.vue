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
					<td v-for="header in headers" :key="header.key" :class="column[header.key]?.classList">
						<slot>
							<a :href="column[header.key]?.href" v-if="column[header.key]?.href">
								<div class="thumbTitle" v-if="column[header.key]?.thumb">
									<span class="thumb"><img :src="column[header.key]?.thumb" alt=""></span>
									<div class="contArea">
										<span class="title">{{column[header.key]?.text}}</span>
									</div>
								</div>
								<template v-else>
									{{column[header.key]?.text}}
								</template>
							</a>
							<component v-else-if="column[header.key]?.component" :is="column[header.key]?.component" v-bind="column[header.key]?.props" />
							<template v-else>
								{{column[header.key]?.text}}
							</template>
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>