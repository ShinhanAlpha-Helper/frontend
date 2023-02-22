<template>
    <div class="page">
        <div class="wrap">
            <header>
                <router-link to="/vocamain"><i class="fa-solid fa-arrow-left fa-2x fa-pull-left"></i></router-link>
                <h3>
                    단어 랭킹
                </h3>
            </header>
            <br>
            <img alt="Vue logo" src="../assets/rankingimg.png">
            <br><br><br>

        </div>
        <div class="d-flex justify-content-center">
            <b-tabs content-class="mt-3">
                <b-tab title="오늘" active>
                        <img alt="Vue logo" src="../assets/medal1.png">예수금<hr>
                        <img alt="Vue logo" src="../assets/medal2.png">상한가<hr>
                        <img alt="Vue logo" src="../assets/medal3.png">공매도<hr>
                </b-tab>
                <b-tab title="주간">
                        <img alt="Vue logo" src="../assets/medal1.png" >인플레이션<hr>
                        <img alt="Vue logo" src="../assets/medal2.png">선물<hr>
                        <img alt="Vue logo" src="../assets/medal3.png">공모주<hr>
                </b-tab>
            </b-tabs>
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
export default {
  data() { /* ... */ },
  compatConfig: { MODE: 3 }
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
h3 {
    margin-right:50px;
}

.box{
    text-align:center;
    display:inline-block;
    }

.mt-3{
    float:none;
    display:inline-block;
    zoom:1;
}

.container 
    { 
    padding-top: 40px; 
    }

.text {
    color: #FB0000;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
}
.btn {
    /* position: absolute; */
    width: 91px;
    height: 27px;
    /* left: 31px;
    top: 416px; */
    background-color: white;
    border-radius: 10px;
    border-color: black;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
}
.tab button{
    background-color: white;
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