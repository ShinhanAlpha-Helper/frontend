<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-arrow-left fa-2x fa-pull-left" onclick=""></i>
            <h3>
            단어장
            </h3>
        </header>
        <nav style="--bs-breadcrumb-divider:'';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb" aria-current="page">단어/뜻</li>&nbsp;&nbsp;
                <li class="breadcrumb active"><a href="#">단어만</a></li>&nbsp;&nbsp;
                <li class="breadcrumb active" aria-current="page">뜻만</li>
            </ol>
            <main>
                <div class="vocas">
                    <div v-for="(voca, i) in vocas" :key="voca.i">
                        <div>
                            <div class="contents">
                                <strong>{{ voca.word }}</strong>
                                <br>
                                <div class="meaning-box" @click="showMeaningBox(i)">
                                    <div class="meaning-text">
                                        {{ voca.mean }}
                                    </div>
                                    <div
                                    class="blind-box"
                                    :style="{ display: voca.showMeaning ? 'block':'none' }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </nav>
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
            vocas: [
                {
                    word: '상한가',
                    mean: '상한가 뜻',
                    showMeaning: true,
                },
                {
                    word: '매도',
                    mean: '매도 뜻',
                    showMeaning: true,
                },
                {
                    word: '매수',
                    mean: '매수 뜻',
                    showMeaning: true,
                },
                {
                    word: '선물',
                    mean: '선물 뜻',
                    showMeaning: true,
                },
                {
                    word: '주식',
                    mean: '주식 뜻',
                    showMeaning: true,
                },
        ]
                
        }
    },
    methods: {
      showMeaningBox(index) {
        this.vocas[index].showMeaning = !this.vocas[index].showMeaning;
      },
    },
}
</script>

<style>
.page {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 375px;
}
.breadcrumb {
    font-size: 11px;
}
.page header i {
    margin-left: 20px;
}
h3 {
    font-size: 15;
    margin-right:50px;
}
.contents {
    text-align: left;
}
.contents strong {
    font-size: 15px;
}
.meaning-box {
    margin-top: 5px;
    margin-bottom: 20px;
    position: relative;
    width: 286px;
    height: 36px;
    cursor: pointer;
}
.blind-box {
    background-color: #E8EDFF;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.meaning-text {
    position: absolute;
    font-size: 13px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
/* .meaning-text {
    position: absolute;
    top: 50%;
    margin-left: 30px;
    transform: translate(-50%, -50%);
    font-size: 13px;
} */


p {
    margin-top: 10px;
    color: grey
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

</style>