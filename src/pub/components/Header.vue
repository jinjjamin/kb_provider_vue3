<script setup>
	// UI

	const gnbOpen = (event)=> {
		event.currentTarget.classList.add('on');
	}

	const gnbClose = event => {
		event.currentTarget.classList.remove('on');
	}

	const gnbDep1s = [
		{
			index : 1,
			gnbDep1Menu : '대시보드'
		},
		{
			index : 2,
			gnbDep1Menu : '마이서비스',
			gnbDep2 : [
				{
					idx : 1,
					menu : '프로그램 리스트'
				},
				{
					idx : 2,
					menu : '프로그램 등록'
				},
				{
					idx : 3,
					menu : '콘텐츠'
				},
				{
					idx : 4,
					menu : '트레이너관리'
				},
				{
					idx : 5,
					menu : '코드관리'
				}
			]
		},
		{
			index : 3,
			gnbDep1Menu : '주문관리'
		},
		{
			index : 4,
			gnbDep1Menu : '서비스이용관리',
			gnbDep2 : [
				{
					idx : 1,
					menu : '고객일반 정보관리'
				},
				{
					idx : 2,
					menu : '고객건강 정보관리'
				},
				{
					idx : 3,
					menu : '푸시 코칭'
				},
				{
					idx : 4,
					menu : '회원탈퇴관리'
				}
			]
		},
		{
			index : 5,
			gnbDep1Menu : '운영관리',
			gnbDep2 : [
				{
					idx : 1,
					menu : 'FAQ관리'
				},
				{
					idx : 2,
					menu : 'Q&A관리'
				},
				{
					idx : 3,
					menu : '공지사항관리'
				},
				{
					idx : 4,
					menu : '계정관리'
				},
				{
					idx : 4,
					menu : '기본정보'
				}
			]
		}
	]
</script>

<template>
    <header id="header">
        <h1 class="logo"><a href="#">로고</a></h1>
        <div id="gnb">
			<ul class="gnbArea">
				<li class="gnbDep1" v-for="gnbDep1 in gnbDep1s" :key="gnbDep1.index" @mouseenter="gnbOpen" @mouseleave="gnbClose">
					<a href="#">{{gnbDep1.gnbDep1Menu}}</a>
					<ul class="gnbDep2" v-if="gnbDep1.gnbDep2">
						<li v-for="gnbDep2 in gnbDep1.gnbDep2" :key="gnbDep2.idx"><a href="#">{{gnbDep2.menu}}</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="utilWrap">
			<div class="manageMsg">
				<span><strong class="name">홍길동</strong>님</span> 환영합니다
			</div>
			<div class="btnArea">
				<a href="#" class="btnsHead">
					<span>로그아웃</span>
				</a>
				<a href="#" class="btnsHead">
					<span>회원정보수정</span>
				</a>
			</div>
		</div>
    </header>
</template>