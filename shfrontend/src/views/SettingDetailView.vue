<template>
    <div class="page">
        <header>
            <h5>편의 기능<router-link to="/setting"><i class="fa-solid fa-x"></i></router-link></h5>
            <hr>
        </header>
        <nav>
            <li v-for="item in list" :key="item.title">
                <div class="list" v-if="item.option===1">
                    <div class="contents">
                        <span>{{ item.title }}</span>
                        <br>
                        <p>{{ item.content }}</p>
                    </div>
                    <hr>    
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="list" v-else-if="item.option===2">
                    <div class="contents">
                        <span>{{ item.title }}</span>
                        <br>
                        <p>{{ item.content }}</p>
                    </div>
                    <hr>    
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                    </div>
                </div>
                <div class="list" v-else>
                    <div class="contents">
                        <span>{{ item.title }}</span>
                        <br>
                        <p>{{ item.content }}</p>
                    </div>
                    <hr>    
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                    </div>
                </div>
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
                    option: 1,
                    title: '초기 화면설정',
                    content: '알파 접속 시 보이는 첫 화면입니다.',
                },
                {
                    option: 2,
                    title: '화면 항상 켜짐',
                    content: '화면이 자동으로 꺼지는 것을 방지합니다.',
                },
                {
                    option: 1,
                    title: '퀵메뉴 편집',
                    content: '하단 퀵메뉴를 나만의 메뉴로 편집할 수 있습니다.',
                },
                {
                    option: 1,
                    title: '티커 설정',
                    content: '티커에 보여지는 지수/환율 항목을 설정할 수 있습니다.',
                },
                {
                    option: 1,
                    title: '위젯 설정',
                    content: '위젯에 보여지는 지수/종목정보 항목을 설정할 수 있습니다.',
                },
                {
                    option: 3,
                    title: '단어검색 기능 설정',
                    content: '단어 검색 기능을 실행 합니다.',
                },
                {
                    option: 3,
                    title: '단어장 기능 설정',
                    content: '단어장 기능을 실행 합니다.',
                },
                {
                    option: 2,
                    title: '예상 체결가 보기',
                    content: '현재가, 주문화면 등에서 예상 체결가가 자동으로 표시됩니다.',
                },
            ]
        }
    },
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
    margin-bottom: 0px;
}

h5 {
    position: relative;
    top: 2px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 15px;
}

hr {
    width: 345px;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
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
    /* height: 75px; */
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
    font-size: 11px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.fa-chevron-left {
    margin-top: 10px;
}

.fa-x {
    cursor: pointer;
    float: right;
    position: relative;
    margin-right: 10px;
    top: 0px;
    color: black;
}
.fa-chevron-right {
    color: grey;
    position: relative;
    float: right;
    top: -50px;
    vertical-align: middle;
    padding-right: 10px;
}

.fa-circle-chevron-down {
    margin-left: 5px;
    color: grey;
}

.form-check {
    position: relative;
    float: right;
    top: -55px;
}
</style>