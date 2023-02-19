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
</template>

<script>
export default {

}
</script>

<style scoped>
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


h3 {
    margin-right:30px;
}
</style>