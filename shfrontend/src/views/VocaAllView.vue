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
                        <div class="voca-item">
                            <div class="left-text"> <!-- 'fas': 1 색깔, 0이면 없어짐 -->
                                <i class="far fa-star" style="color: gray;" @click="toggleBookmark($event, note.id)"></i>
                                <strong class="voca-text">{{ note.title }}
                                    <br>
                                    <div class="voca-mean">{{ note.content }}</div>
                                </strong>
                            </div>
                            <b class="voca-del">
                                <a href="" @click.prevent="delItem(note.id)">삭제</a>
                            </b>
                        </div><hr>
                    </div>
                </div>
            </main>
        </nav>
        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#"><router-link to="/menu"><i class="fa-solid fa-bars"></i></router-link></a></th>
                        <th><a href="#"><router-link to="/home">홈</router-link></a></th>
                        <th><a href="#">계좌<br>개설</a></th>
                        <th><a href="#">인증<br>센터</a></th>
                        <th><a href="#">챗봇</a></th>
                        <th><a href="#">로그아웃</a></th>
                        <th><a href="#"><i class="fa-solid fa-power-off"></i></a></th>
                    </tr>
                </table>
            </div>
        </footer>
    </div>
</template>


<script>
import axios from 'axios';
import $ from 'jquery'

export default {
    data() {
        return{
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
            url: 'http://127.0.0.1:8000/api/note',
            // url: 'http://34.64.189.50/api/note',
            headers: {
                Authorization: 'JWT ' + token,
            },
        })
        .then(response => {
            this.notes = response.data.results;
            for (let i = 0; i < this.notes.length; i++)
                this.bookmarks[i] = 0;
        })
        .catch(error => {
            console.log(error);
        });
    },
    methods: {
        toggleBookmark(event, noteid) {
            if (event.currentTarget.style.color == 'grey')
                event.currentTarget.style.color = 'yellow';
            else
                event.currentTarget.style.color = 'grey'

            console.log(event.currentTarget.classList);
            const token = localStorage["token"];
            if (!token) {
                console.error('Token not found');
                return;
            }
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/note/bookmark',
                // url: 'http://34.64.189.50/api/note/bookmark',
                headers: {
                    Authorization: 'JWT ' + token,
                },
                data: {
                    note: noteid,
                },
            })
            .then(response => {
                console.log(response.status);
            })
            .catch(error => {
                console.error(error);
            });
        },
        delItem(noteid) {
            axios({
                method: 'delete',
                url: 'http://127.0.0.1:8000/api/note',
                // url: 'http://34.64.189.50/api/note',
                headers: {
                    Authorization: 'JWT ' + localStorage.token,
                },
                data: {
                    id: noteid,
                },
                }).then(response => {
                    alert('단어가 삭제되었습니다.');
                    location.reload();
                }).catch(error => {
                    console.error(error);
                });
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
.fa-star {
    font-size: 20px;
    float: left;
    color: #ccc;
}

.fas {
    color: yellow;
}


.voca-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left-text {
    display: flex;
    align-items: center;
    position: relative;
}
.voca-text {
    margin-left: 5px;
    text-align: left;
    font-size: 15px;
}
.voca-mean {
    font-size: 13px;
    color: #979797;
    width: 100%;
    height: 100%;
}

.voca-del {
    /* margin-left: auto; */
    padding: 15px;
    font-size: 11px;
}

footer {
    position: fixed;
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
    width: 375px;
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

</style>