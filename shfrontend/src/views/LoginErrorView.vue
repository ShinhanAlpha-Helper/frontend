<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-arrow-left fa-2x fa-pull-left" onclick=""></i>
            <h3>
                나만의 단어장
            </h3>
        </header>
        <br>
        <img src="../assets/loginerror.png">
        <p class="text">로그인이 필요한 서비스 입니다.</p><br>
        <button class="btn">로그인하러 가기</button>
        <!-- <v-btn rounded color="blue">로그인하러 가기</v-btn> -->
    </div>
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
</template>

<script>
export default {

}
</script>

<style scoped>
.page {
    margin-top: 30px;
}
.page header i {
    margin-left: 20px;
}
h3 {
    font-size: 15;
    margin-right:50px;
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