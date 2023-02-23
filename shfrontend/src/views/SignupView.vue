<template>
    <div class="page">
        <header>
            <router-link to="/"><i class="fa-solid fa-xmark fa-2x fa-pull-right"></i></router-link>
            <h3>
                회원가입
            </h3>          
        </header>
        <b-modal  v-model="confirmModal" hide-footer>
            <div v-if="showModalsucc">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel3" style="text-align: center;">회원가입 성공</h1>
                <div class="modal-footer">
                    <router-link to="/login"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin">로그인하러 가기</button></router-link>
                </div>
            </div>
        </b-modal>

        <b-modal  v-model="failModal" hide-footer>
            <div v-if="showModalfail" style="text-align: center;">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">회원가입 실패</h1>
            </div>
        </b-modal>

        <!-- <div class="black-bg" v-if="showModal">
            <div class="white-bg">
                <h4>회원가입 성공</h4>
                <button 
                    class="btn btn-primary"
                >단어장에 추가</button>
            </div>
        </div> -->

        <div class="signuppage">
            <form>
                <div>
                    <input style="background-color: #E9F1FE;" type="text" v-model="inputusername" placeholder="아이디"/>
                    <div class="underline"></div>
                    <input style="background-color: #E9F1FE;" type="password" v-model="inputpassword" placeholder="비밀번호"/>
                    <div class="underline"></div>
                    <input style="background-color: #E9F1FE;" type="password" v-model="pwconfirm" placeholder="비밀번호 확인"/>
                    <div class="underline"></div>
                    <input style="background-color: #E9F1FE;" type="email" v-model="email" placeholder="E-mail"/>
                    <div class="underline"></div> 
                </div>

                <br>
                <div class="text-right">
                    <button type="button" class="btn btn-primary" @click="signup">회원가입</button>0
                </div>
            </form>
        </div>
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
            showModalsucc: false,
            showModalfail: false,
            confirmModal: false,
            failModal: false,
            inputusername: '',
            inputpassword: '',
            pwconfirm: '',
            email: '',
        }
    },
    methods: {
    	signup() {
            console.log(this.inputusername, this.inputpassword, this.pwconfirm, this.email);

            // axios.post('http://127.0.0.1:8000/member/register', {
            axios.post('http://34.64.189.50/api/member/register', {
                username: this.inputusername,
                password: this.inputpassword,
                password2: this.pwconfirm,
                email: this.email,
            }).then(() => {
                this.showModalsucc = true;
                this.confirmModal = true;
            }).catch(() => {
                this.showModalfail = true;
                this.failModal = true;
            })
        }
    }
}
</script>



<style scoped>
.btn.btn-primary {
    background-color: #3F81D7;
}
.black-bg {
    width: 100%;
    height: 100%;
    background: black;
    position: flexed; padding: 20px;
}
.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;padding: 20px;
}

.btn.btn-secondary{
    margin-right: 20px;
}
    .background {
        background-color: #E9F1FE;
        height: 530px;
    }

    h3 {
        /* text-align: left;
        font-weight: bold;
        font-size: px; */
        text-align: left;
        margin-left: 20px;
    }
    .page header i {
        margin-right: 20px;
    }

    .signuppage {
        padding: 90px 30px 0 30px;
        background-color: #E9F1FE;
        height: calc(100vh - 132px);
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

    .page {
        margin: 0 auto;
        margin-top: 30px;
        max-width: 375px;
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