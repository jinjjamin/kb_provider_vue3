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
    import Grid from '../components/Grid.vue';
    import SearchBox from '../components/SearchBox.vue';
    import Bedge from '../components/Bedge.vue';

    const optionLists1 = [
        {
            index : 1,
            value : '심사상태'
        }
    ]

     const optionLists2 = [
        {
            index : 1,
            value : '서비스상태'
        }
    ]

    const clickEvent = () => {
        alert('클릭 이벤트')
    }

    // Grid Data
    const headers = [
        {
			key : 'idx1',
			label : "번호",
            width : '80px',
		},
		{
			key : 'idx2',
			label : "프로그램명",
            width : 'auto',
		},
		{
			key : 'idx3',
			label : "수강기간",
            width : '90px',
		},
		{
			key : 'idx4',
			label : "가격",
            width : '120px',
		},
		{
			key : 'idx5',
			label : "등록일/심사완료일",
            width : '170px',
		},
		{
			key : 'idx6',
			label : "심사상태",
            width : '90px',
		},
        {
			key : 'idx7',
			label : "서비스상태",
            width : '90px',
		},
        {
			key : 'idx8',
			label : "관리",
            width : '100px',
		}
    ]

    const columns = [
        {
            idx1 : {
                text : 99,
            },
            idx2 : {
                text : '활기찬 하루르 위한 명상&스트레칭',
                classList : 'subject',
                thumb : '/src/assets/images/_temp/@thumb_program01.png',
                href : '#',
            },
            idx3 : {
                classList : 'fontMid',
                text :'3개월'
            },
            idx4 : {
                text : '2021-05-20 15:20'
            },
            idx5 : {
                text : '2021-5-20 15:20'
            },
            idx6 : {
                component : Bedge,
                props : {
                    text : '심사중',
                    colorType : 'col01'
                }
            },
            idx7 : {
                component : Bedge,
                props : {
                    text : '준비중',
                    colorType : 'col04'
                }
            },
            idx8 : {
                component : Button,
                props : {
                    buttonDefault : false,
                    buttonClass : 'btnsEdit modify',
                    buttonText : '수정',
                    href : "#"
                }
            }
        },
        {
            idx1 : {
                text : 99,
            },
            idx2 : {
                text : '활기찬 하루르 위한 명상&스트레칭',
                classList : 'subject',
                thumb : '/src/assets/images/_temp/@thumb_program01.png',
                href : '#',
            },
            idx3 : {
                classList : 'fontMid',
                text :'3개월'
            },
            idx4 : {
                text : '2021-05-20 15:20'
            },
            idx5 : {
                text : '2021-5-20 15:20'
            },
            idx6 : {
                component : Bedge,
                props : {
                    text : '심사중',
                    colorType : 'col01'
                }
            },
            idx7 : {
                component : Bedge,
                props : {
                    text : '준비중',
                    colorType : 'col04'
                }
            },
            idx8 : {
                component : Button,
                props : {
                    buttonDefault : false,
                    buttonClass : 'btnsEdit del',
                    buttonText : '삭제',
                    href : "#"
                }
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
                <!-- 내용 : s -->
                <div id="contents">
                    <div class="topTitle first space">
                        <h2 class="bigTitle">프로그램</h2>
                    </div>
                    <SearchBox>
                        <span class="select">
                            <SelectBox :optionLists="optionLists1" />
                        </span>
                        <span class="select">
                            <SelectBox :optionLists="optionLists2" />
                        </span>
                        <span>
                            <Input type="text" placeholder="검색 할 프로그램 명을 입력하세요" />
                        </span>
                        <span class="btn">
                            <Button link="#" buttonText="검색" buttonColor="btnCol03" buttonSize="mid" buttonType="search" @click="clickEvent" />
                        </span>
                    </SearchBox>

                    <Grid :headers="headers" :columns="columns"></Grid>
                </div>
                <!-- 내용 : e -->
            </div>
        </div>
        <Footer />
    </div>
    <!-- wrap : s -->
</template>

<style scoped>
</style>
