<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-chevron-left fa-xl fa-pull-left"></i>
            <h4>앱 설정<i class="fa-solid fa-circle-chevron-down"></i></h4>
        </header>
        <body>
            <li v-for="item in list" :key="item.title">
                <div class="list">
                    <img :src='require(`@/assets/settings/${item.src}`)'>
                    <div class="contents">
                        <strong>{{ item.title }}</strong>
                        <br>
                        <p>{{ item.content }}</p>
                        <hr>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </li>
        </body>
        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#">X</a></th>
                        <th><a href="#">홈</a> </th>
                        <th><a href="#">계좌<br>개설</a></th>
                        <th><a href="#">인증<br>센터</a></th>
                        <th><a href="#">챗봇</a></th>
                        <th><a href="#">로그인</a></th>
                        <th><a href="#"><i class="fa-solid fa-power-off"></i></a></th>
                    </tr>
                </table>
            </div>
        </footer>
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
    max-width: 375px;
}
.btn {
    /* position: absolute; */
    width: 253px;
    height: 39px;
    /* left: 31px;
    top: 416px; */
    background-color: #3647F2;
    border-radius: 19.5px;
    border-color:#3647F2;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 15px;
}
footer {
    z-index: 100;
}

a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
}

#menu-wrapper {
    overflow-x: auto;
    justify-content: center;
    position: fixed;
    bottom: 0;
    border-collapse: collapse;
    height: 60px;
}

table {
    border-collapse: collapse;
    max-width: 375px;
    height: 60px;
}

th {
    text-align: center;
    background-color: #ffffff;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 15px;
}

body {
    padding-bottom: 60px;
}

h4 {
    text-align: left;
    margin: 0,0,10,0px;
}

hr {
    width: 345px;
}

li {
    list-style-type: none;
}

img {
    float: left;
    margin-right: 15px;
    width: 55px;
    height: 55px;
}

.list {
    text-align: left;
    height: 75px;
    width: 350px;
    /* margin-right: 20px; */
}

div.contents {
    width: 300px;
    margin-right: 10px;
}

strong {
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