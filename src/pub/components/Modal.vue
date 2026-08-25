<script setup>
	import {ref} from 'vue';
	import Button from '../components/Button.vue';

	defineProps({
		open: {
			type: Boolean,
			default: false
		},
		modalTitle : String,
		screenID : String,
        alert : Boolean,
	});

	const emit = defineEmits(['close'])

	const closeModal = () => {
		emit('close')
	}

</script>

<template>
    <div class="layerPop" :id="screenID" v-if="open" :alert="alert">
        <div class="layerPopArea">
            <div class="popHead">
                <strong class="tit">{{modalTitle}}</strong>
            </div>
            <div class="popCont">
                <!-- 내용 : s -->
                <slot></slot>
                <!-- 내용 : e -->
            </div>
            <div class="popFoot">
                <div class="btnArea">
                    <Button buttonText = "취소" buttonColor="btnCol02" buttonSize="mid" @click="closeModal" />
                    <Button buttonText = "확인" buttonColor="btnCol01" buttonSize="mid" />
                </div>
            </div>
            <a href="#" class="btnPopClose" @click="closeModal">해당 레이어 닫기</a>
        </div>
    </div>
</template>