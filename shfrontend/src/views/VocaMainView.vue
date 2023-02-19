<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-arrow-left fa-2x fa-pull-left" onclick=""></i>
            <h3>
            나만의 단어장
            </h3>
        </header>
        <br>
        <img alt="Vue logo" src="../assets/mainimg.png">
        <br>
        <button class="btn"><p :style="{ color : 'white' }">모든 단어 보기</p></button>
        <br><br>
        <button class="btn"><p :style="{ color : 'white' }">즐겨찾기 단어 보기</p></button>
        <br><br>
        <button class="btn"><p :style="{ color : 'white' }"> 단어 랭킹 보기</p></button>
    </div>
</template>

<script>

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