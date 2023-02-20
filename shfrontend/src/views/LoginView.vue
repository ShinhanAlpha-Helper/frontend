<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-xmark fa-2x fa-pull-right" onclick=""></i>
            <h3>
                아이디 로그인
            </h3>
        </header>
        <div class="form-group mb-3">
                <label for="username">아이디</label>
                <input type="text" class="form-control" id="username" name="username" />
            </div>
            <div class="form-group mb-3">
                <label for="password">비밀번호</label>
                <input type="password" class="form-control" id="password" name="password" />
            </div>
            <div class="text-right">
                <button type="button" class="btn btn-primary" onclick="login()">로그인</button>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
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
</style>