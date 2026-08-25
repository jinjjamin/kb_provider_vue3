<script setup>
    import {ref} from 'vue';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import Button from '../components/Button.vue';
    import SelectBox from '../components/SelectBox.vue';
    import Input from '../components/Input.vue';
    import CheckBox from '../components/CheckBox.vue';
    import RadioBox from '../components/RadioBox.vue';
    import Modal from '../components/Modal.vue';
    import Pagination from '../components/Pagination.vue';
    import GridData from '../components/GridData.vue';

    // 모달 팝업 제어
    const activeModal = ref(null);
    const openModal = (id) => {
        activeModal.value = id;
    }

    const closeModal = () => {
        activeModal.value = null
    }

    // select
    const optionLists = [
        {
            index : 1,
            value : '사과'
        },
        {
            index : 2,
            value : '바나나'
        },
        {
            index : 3,
            value : '포도'
        }
    ]
    const selectedOption = ref('');

    // input text
    const keyword = ref('');

    // checkbox
    const checkboxLists = [
        {
            name : 'chk01',
            id : 'chk01',
            label : '체크박스1',
            checked : true
        },
        {
            name : 'chk02',
            id : 'chk02',
            label : '체크박스2'
        },
        {
            name : 'chk03',
            id : 'chk03',
            label : '체크박스3'
        }
    ]

     // radioBox
    const radioBoxLists = [
        {
            name : 'rdo',
            id : 'rdo01',
            label : '라디오박스1'
        },
        {
            name : 'rdo',
            id : 'rdo02',
            label : '라디오박스2',
            checked : true
        },
        {
            name : 'rdo',
            id : 'rdo03',
            label : '라디오박스3'
        }
    ]


    // Grid Data
    const headers = [
        {
			key : 'num',
			label : "번호",
            width : '7%',
		},
		{
			key : 'subject',
			label : "제목",
            width : 'auto',
		},
		{
			key : 'priority',
			label : "우선순위",
            width : '7%',
		},
		{
			key : 'date',
			label : "등록일/심사완료일",
            width : '15%',
		},
		{
			key : 'use',
			label : "사용유무",
            width : '10%',
		},
		{
			key : 'manage',
			label : "관리",
            width : '10%',
		}
    ]

    const columns = [
        {
            num : {
                text : 1,
            },
            subject : {
                text : '알코올에 대처하는 우리들의 자세',
                align : 'left',
                href : '#',
            },
            priority : {
                text :1
            },
            date : {
                text : '2021-05-20 15:20'
            },
            use : {
                text : '사용'
            },
            manage : {
                text : ''
            }
        },
        {
            num : {
                text : 3,
            },
            subject : {
                text : '알코올에 대처하는 우리들의 자세',
                align : 'left',
                href : '#',
            },
            priority : {
                text :1
            },
            date : {
                text : '2021-05-20 15:20'
            },
            use : {
                text : '사용'
            },
            manage : {
                text : ''
            }
        },
        {
            num : {
                text : 3,
            },
            subject : {
                text : '알코올에 대처하는 우리들의 자세',
                align : 'left',
                href : '#',
            },
            priority : {
                text :1
            },
            date : {
                text : '2021-05-20 15:20'
            },
            use : {
                text : '사용'
            },
            manage : {
                text : ''
            }
        }
    ]

</script>

<template>
    <!-- wrap : s -->
    <div class="wrap">
        <Header />
        <div class="container">
            <div class="contWrap">
                <div id="contents">
                    <div class="topTitle first">
                        <h2 class="bigTitle">얼럿창 뛰우기</h2>
                    </div>
                    <div class="btnArea">
						<div class="left">
                            <Button buttonText = "얼럿 버튼 실행" buttonColor="btnCol01" @click="openModal('layerAlert')" />
                            <Button buttonText = "레이어 버튼 실행" buttonColor="btnCol01" @click="openModal('layerID')" />
						</div>
					</div>


                    <div class="topTitle">
                        <h2 class="bigTitle">Button</h2>
                    </div>
                    <div class="topTitle">
                        <h3 class="midTitle">48 버튼</h3>
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "프로그램 등록" buttonColor="btnCol01" />
                        <Button buttonText = "목록" buttonColor="btnCol02" />
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "승인" buttonColor="btnCol03" buttonType="agree" />
                        <Button buttonText = "반력" buttonColor="btnCol03" buttonType="return" />
                    </div>

                    <div class="topTitle">
                        <h3 class="midTitle">40 버튼</h3>
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "검색" buttonColor="btnCol03" buttonType="search" buttonSize="mid" />
                        <Button buttonText = "일자추가" buttonColor="btnCol03" buttonType="dateAdd" buttonSize="mid" />
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "주차삭제" buttonColor="btnLine02" buttonType="del" buttonSize="mid" />
                        <Button buttonText = "엑셀파일 다운로드" buttonColor="btnLine02" buttonType="download" buttonSize="mid" />
                        <Button buttonText = "비밀번호 변경" buttonColor="btnLine02" buttonType="pwdChange" buttonSize="mid" />
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "검색" buttonColor="btnCol03" buttonSize="mid" />
                        <Button buttonText = "취소" buttonColor="btnCol02" buttonSize="mid" />
                        <Button buttonText = "확인" buttonColor="btnCol01" buttonSize="mid" />
                    </div>

                    <div class="topTitle">
                        <h3 class="midTitle">32 버튼</h3>
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "로그아웃" buttonColor="btnLine01" buttonSize="small" />
                        <Button buttonText = "사진등록" buttonColor="btnCol04" buttonSize="small" />
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "양식 내려받기" buttonColor="btnLine02" buttonType="download" buttonSize="small" />
                        <Button buttonText = "배정" buttonColor="btnLine02" buttonType="check" buttonSize="small" />
                        <Button buttonText = "추가" buttonColor="btnLine02" buttonType="dateAdd" buttonSize="small" />
                        <Button buttonText = "상담 접수지 보기" buttonColor="btnLine02" buttonType="reception" buttonSize="small" />
                    </div>

                    <div class="topTitle">
                        <h3 class="midTitle">64 버튼</h3>
                    </div>
                    <div class="btnArea left">
                        <Button buttonText = "주차별 콘텐츠 그룹 추가" :buttonDefault="false" buttonType="btnsAdd" />
                    </div>

                    <div class="topTitle">
                        <h2 class="bigTitle">SelectBox <em v-if="selectedOption">:</em> {{ selectedOption }}</h2>
                    </div>
                     <SelectBox v-model="selectedOption" :optionLists="optionLists" />

                    <div class="topTitle">
                        <h2 class="bigTitle">Input Text <em v-if="keyword">:</em> {{ keyword }}</h2>
                    </div>
                    <Input type="text" classList="" placeholder="입력하세요" v-model="keyword" />

                    <div class="topTitle">
                        <h2 class="bigTitle">CheckBox</h2>
                    </div>

                    <div class="checkboxList">
                        <CheckBox v-for="item in checkboxLists" :key="item.id" :id="item.id" :name="item.name" :label="item.label" :value="item.label" :checked="item.checked" />
                    </div>

                    <div class="topTitle">
                        <h2 class="bigTitle">RadioBox</h2>
                    </div>
                    <div class="radioList">
                        <RadioBox v-for="item in radioBoxLists" :key="item.id" :id="item.id" :name="item.name" :label="item.label" :value="item.label" :checked="item.checked" />
                    </div>

                    <div class="topTitle">
					    <h2 class="bigTitle">pagination</h2>
                    </div>
                    <Pagination :totalPage="10" />

                    <div class="topTitle">
                        <h2 class="bigTitle">Table</h2>
                    </div>

                    <div class="topTitle">
                        <h3 class="midTitle">gridData</h3>
                    </div>

                    <GridData :headers="headers" :columns="columns" />

				</div>
            </div>
        </div>
        <Footer />
    </div>
    <!-- wrap : s -->

    <!--[레] Alert : s -->
    <Modal :open="activeModal === 'layerAlert'" @close="closeModal" :alert="true" modalTitle="Alert" screenID="layerAlert">
        <div>얼럿창 입니다.</div>
    </Modal>
    <!--[레] Alert : e -->

    <!--[레] 샘플 레이어 : s -->
    <Modal :open="activeModal === 'layerID'" @close="closeModal" :alert="false" modalTitle="레이어 타이틀" screenID="layerID">
        <div>레이어 텍스트</div>
    </Modal>
    <!--[레] 샘플 레이어 : e -->
</template>

<style scoped>
</style>
