<template>
    <div class="page">
        <header>
            <router-link to="/home"><i class="fa-solid fa-xmark fa-2x fa-pull-right" style="margin-right: 20px;"></i></router-link>
            <h3>
                나만의 단어장
            </h3>
        </header>
        <br>
        <img src="../assets/loginerror.png">
        <p class="text">로그인이 필요한 서비스 입니다.</p><br>
        <button class="btn">
            <router-link to="/login" class="btn_text">로그인하러 가기</router-link>
        </button>
        <!-- <v-btn rounded color="blue">로그인하러 가기</v-btn> -->
        <footer>
            <div id="menu-wrapper">
                <table>
                    <tr>
                        <th><a href="#"><router-link to="/menu"><i class="fa-solid fa-bars"></i></router-link></a></th>
                        <th><a href="#"><router-link to="/home">홈</router-link></a></th>
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
    font-size: 15;
    text-align: center;
    margin-left: 50px;
    /* margin-right:0px; */
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
    text-align: center;
}
.btn_text {
    color: white;
    font-weight: bold;
    font-size: 16px;
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