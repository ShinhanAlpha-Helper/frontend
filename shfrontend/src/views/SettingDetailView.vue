<template>
    <div class="page">
        <header>
            <h4>편의기능<i class="fa-light fa-xmark" style="float: right"></i></h4>
            <hr>
        </header>
        <body>
            <li v-for="(item,i) in list" :key="item.title">
                <div class="list" v-if="item.title === '초기 화면설정' || item.title === '퀵메뉴 편집' || item.title === '티커 설정' || item.title === '위젯 설정'">
                    <div class="contents">
                        <strong>{{ item.title }}</strong>
                        <br>
                        <p>{{ item.content }}</p>
                        <hr>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="list" v-else>
                    <div class="contents">
                        <strong>{{ item.title }}</strong>
                        <br>
                        <p>{{ item.content }}</p>
                        <hr>
                    </div>
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
                    title: '초기 화면설정',
                    content: '알파 접속 시 보이는 첫 화면입니다.',
                },
                {
                    title: '화면 항상 켜짐',
                    content: '화면이 자동으로 꺼지는 것을 방지합니다.',
                    state: 'on'
                },
                {
                    title: '퀵메뉴 편집',
                    content: '하단 퀵메뉴를 나만의 메뉴로 편집할 수 있습니다.',
                },
                {
                    title: '티커 설정',
                    content: '티커에 보여지는 지수/환율 항목을 설정할 수 있습니다.',
                },
                {
                    title: '위젯 설정',
                    content: '위젯에 보여지는 지수/종목정보 항목을 설정할 수 있습니다.',
                },
                {
                    title: '단어검색 기능 설정',
                    content: '단어 검색 기능을 실행 합니다.',
                    state: 'off'
                },
                {
                    title: '단어장 기능 설정',
                    content: '단어장 기능을 실행 합니다.',
                    state: 'off'
                },
                {
                    title: '예상 체결가 보기',
                    content: '현재가, 주문화면 등에서 예상 체결가가 자동으로 표시됩니다.',
                    state: 'on'
                },
            ]
        }
    },
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