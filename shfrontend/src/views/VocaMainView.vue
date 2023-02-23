<template>
    <div class="page">
        <header>
            <router-link to="/menu"><i class="fa-solid fa-arrow-left fa-2x fa-pull-left"></i></router-link>
            <h3>
            나만의 단어장
            </h3>
        </header>
        <br>
        <img alt="Vue logo" src="../assets/mainimg.png">
        <br>
        <button class="btn">
            <router-link to="/vocaall"><p :style="{ color : 'white' }">모든 단어 보기</p></router-link>
        </button>
        <button class="btn">
            <router-link to="/bookmark"><p :style="{ color : 'white' }">즐겨찾기 단어 보기</p></router-link>
        </button>
        <button class="btn">
            <router-link to="/dailyrank"><p :style="{ color : 'white' }"> 단어 랭킹 보기</p></router-link>
        </button>

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
                        <th><a href="#"><i class="fa-solid fa-power-off" @click="logout()"></i></a></th>
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
            userinfo: [],
        };
    },
    methods: {
        logout() {
            // console.log(this.username, this.password);
            axios.get('http://127.0.0.1:8000/api/token', {
                headers: {
                    Authorization: 'JWT ' + localStorage["token"],
                }
            }).then(response => {
                this.userinfo = response.data.results;
                userinfo.removeItem();
                localStorage.removeItem("token");
                // this.$router.push({path:'/login'});
                // localStorage.clear();
                alert('로그아웃 성공');
            }).catch(function () {
                alert("로그아웃 실패");
            });
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
.page header i {
    margin-left: 20px;
}
.text {
    color: #FB0000;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
}
.btn {
    /* position: absolute; */
    width: 256px;
    height: 54px;
    /* left: 31px;
    top: 416px; */
    background-color: #3647F2;
    border-radius: 10px;
    border-color:#3647F2;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    margin: 10px;
}
.btn p {
    margin:10px;
}

h3 {
    margin-right:50px;
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