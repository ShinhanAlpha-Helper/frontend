<template>
    <div class="page">
        <header>
            <router-link to="/menu"><i class="fa-solid fa-chevron-left fa-xl fa-pull-left"></i></router-link>
            <h5>앱 설정<i class="fa-solid fa-circle-chevron-down"></i></h5>
        </header>
        <nav>
            <li v-for="item in list" :key="item.title">
                <router-link to="/setting/detail"><div class="list" style="cursor: pointer;">
                    <img :src='require(`@/assets/settings/${item.src}`)'>
                    <div class="contents">
                        <span>{{ item.title }}</span>
                        <br>
                        <p>{{ item.content }}</p>
                    </div>
                    <hr>
                    <i class="fa-solid fa-chevron-right"></i>
                </div></router-link>
            </li>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: '편의기능',
                    content: '나만의 설정으로 알파를 더욱 편리하게 사용할 수 있습니다.',
                    src: 'setting1.png'
                },
                {
                    title: '알림',
                    content: '중요한 정보를 놓치지 않도록 알림을 설정할 수 있습니다.',
                    src: 'setting2.png'
                },
                {
                    title: '매매기능',
                    content: '나만의 매매기능 설정으로 빠르고 편리하게 투자할 수 있습니다.',
                    src: 'setting3.png'
                },
                {
                    title: '로그인',
                    content: '로그인 시간, 동시접속 등 로그인 관련한 설정을 변경할 수 있습니다.',
                    src: 'setting4.png'
                },
                {
                    title: '계좌',
                    content: '대표계좌를 설정하고 계좌의 순서를 변경할 수 있습니다.',
                    src: 'setting5.png'
                },
                {
                    title: '앱 정보 및 초기화',
                    content: '앱 정보를 확인하고 최신버전으로 업데이트 할 수 있습니다.',
                    src: 'setting6.png'
                },
                {
                    title: 'Smart ARS 서비스 이용 동의',
                    content: '음성과 화면을 함께 이용할 수 있는 서비스 입니다.',
                    src: 'setting7.png'
                },
                {
                    title: '알파랩 설정',
                    content: '알파의 새로운 기능을 먼저 접하실 수 있습니다.',
                    src: 'setting8.png'
                },
            ]
        }
    }
}
</script>

<style scoped>

.page {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 375px;
}
nav {
    padding: 0;
}
header {
    text-align: left;
    margin: 10px;
}

h5 {
    position: relative;
    top: 2px;
    font-size: 15px;
    font-weight: bold;
}

hr {
    width: 345px;
    margin: 0px;
}

li {
    list-style-type: none;
}

img {
    float: left;
    margin-right: 15px;
    width: 55px;
    height: 55px;
    position: relative;
    top: 5px;
}

.list {
    text-align: left;
    height: 75px;
    width: 350px;
    margin-left: 15px;
    /* margin-right: 20px; */
}

div.contents {
    width: 300px;
    position: relative;
}

span {
    font-weight: bold;
    font-size: 15px;
}

p {
    color: grey;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.fa-chevron-left {
    margin-top: 10px;
    color: rgba(46, 64, 81, 1);
}

.fa-chevron-right {
    color: grey;
    position: relative;
    float: right;
    top: -50px;
    padding-right: 10px;
}

.fa-circle-chevron-down {
    margin-left: 5px;
    color: grey;
}


</style>