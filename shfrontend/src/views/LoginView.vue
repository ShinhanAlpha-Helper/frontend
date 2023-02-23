<template>
    <div class="page">
        <header>
            <router-link to="/"><i class="fa-solid fa-xmark fa-2x fa-pull-right"></i></router-link>
            <h3>
                아이디 로그인
            </h3>
        </header>
        <div class="loginpage">
            <p class="main-text">아이디 로그인</p>
            <p class="sub-text">아이디와 비밀번호를 입력해주세요.</p>
            <br>
            <div>
                <input style="background-color: #E9F1FE;" type="text" v-model="username" placeholder="아이디"/>
                <div class="underline"></div>
                <input style="background-color: #E9F1FE;" type="password" v-model="password" placeholder="비밀번호"/>
                <div class="underline"></div>
            </div>
            <div class="signup">
                <router-link to="/signup">회원가입</router-link>
            </div>
            <div>
                <button type="button" class="btn btn-primary" @:click="login()">로그인</button>
            </div>
        </div>

        <b-modal  v-model="failModal" hide-footer>
            <div v-if="showModalfail" style="text-align: center;">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">로그인 실패</h1>
            </div>
        </b-modal>


        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#"><router-link to="/">X</router-link></a></th>
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
            showModalfail: false,
            failModal: false,
            username: null,
            password: null,
        };
    },
    methods: {
        login() {
            console.log(this.username, this.password);
            axios.post('http://127.0.0.1:8000/api/token', {
                username: this.username,
                password: this.password,
            }).then(response => {
                localStorage.setItem("token", response.data.access);
                if (localStorage.getItem("title") && localStorage.getItem("content")) {
                    this.$router.push("/menu");
                } else {
                    this.$router.push({path:'/vocamain'});
                }
            }).catch(() => {
                this.showModalfail = true;
                this.failModal = true;
            })
        },

        AddWord(title, content) {
            const token = localStorage["token"];
            if (!token) {
                console.error('Token not found');
                this.$router.push({path:'/loginerror'});
                return;
            }
            axios({
                method: 'post',
                // url: 'http://127.0.0.1:8000/note',
                url: 'http://127.0.0.1:8000/api/note',
                headers: {
                    Authorization: 'JWT ' + token,
                },
                data: {
                    title,
                    content
                },
            })
            .then(response => {
            })
            .catch(error => {
                console.error(error);
                // this.$router.push({path:'/loginerror'});
            });
        }
    },

};
</script>

<style scoped>
    .page {
        margin: 0 auto;
        margin-top: 30px;
        max-width: 375px;
    }
    h3 {
        text-align: left;
        margin-left: 20px;
    }
    .page header i {
        margin-right: 20px;
    }
    .loginpage {
        padding: 90px 30px 0 30px;
        background-color: #E9F1FE;
        height: calc(100vh - 132px);
    }
    .signup {
        text-align: right;
        margin: 10px 10px;
    }
    .btn {
        margin-top: 10px;
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
    .main-text {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        color: black;
    }
    .sub-text {
        font-size: 15px;
        text-align: left;
        color: black;
    }
    .underline {
        height: 1px;
        width: 230px;
        background-color: black;
        margin: 0px 0px 25px 45px;
    }
    input {
        border: none;
        outline: none;
        font-size: 16px;
        padding: 10px 0;
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
</style>