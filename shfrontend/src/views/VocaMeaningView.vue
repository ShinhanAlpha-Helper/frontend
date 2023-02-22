<template>
    <div class="page">
        <header>
            <router-link to="/vocamain"><i class="fa-solid fa-arrow-left fa-2x fa-pull-left"></i></router-link>
            <h3>
            단어장
            </h3>
        </header>
        <nav style="--bs-breadcrumb-divider:'';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb active"><a href="#"><router-link to="/vocaall">단어/뜻</router-link></a></li>&nbsp;&nbsp;
                <li class="breadcrumb active"><a href="#"><router-link to="/vocalang">단어만</router-link></a></li>&nbsp;&nbsp;
                <li class="breadcrumb active"><a href="#"><router-link to="/vocameaning">뜻만</router-link></a></li>
            </ol>
            <main>
                <div class="vocas">
                    <div v-for="(note, i) in notes" :key="note.i">
                        <div>
                            <div class="contents">
                                <strong>{{ note.content }}</strong>
                                <br>
                                <div class="meaning-box" @click="showMeaningBox(i)">
                                    <div class="meaning-text">
                                        {{ note.title }}
                                    </div>
                                    <div
                                    class="blind-box"
                                    :style="{ display: note.showMeaning ? 'none' : 'block' }"
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
                        <th><a href="#"><router-link to="/menu"><i class="fa-solid fa-bars"></i></router-link></a></th>
                        <th><a href="#"><router-link to="/">홈</router-link></a></th>
                        <th><a href="#">계좌<br>개설</a></th>
                        <th><a href="#">인증<br>센터</a></th>
                        <th><a href="#">챗봇</a></th>
                        <th><a href="#"><router-link to="/login">로그인</router-link></a></th>
                        <th><a href="#"><i class="fa-solid fa-power-off"></i></a></th>
                    </tr>
                </table>
            </div>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            notes: [],
        }
    },
    created() {
        const token = localStorage["token"];
        if (!token) {
            console.error('Token not found');
            return;
        }
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/note',
            headers: {
                Authorization: 'JWT ' + token,
            },
        })
        .then(response => {
            this.notes = response.data.results;
        })
        .catch(error => {
            console.error(error);
        });
    },
    methods: {
      showMeaningBox(index) {
        this.notes[index].showMeaning = !this.notes[index].showMeaning;
      },
    },
}
</script>

<style scoped>
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
    font-size: 13px;
}
.meaning-box {
    margin-top: 5px;
    margin-bottom: 20px;
    position: relative;
    width: 286px;
    cursor: pointer;
}
.blind-box {
    background-color: #E8EDFF;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.meaning-text {
    font-size: 15px;
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