<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-xmark fa-2x fa-pull-right" onclick=""></i>
            <h3>
                아이디 로그인
            </h3>
        </header>
        <body class="mid-text">
            <div class="mx-3">
                아이디
                <div class="mx-1">
                    <v-text-field
                        placeholder="userId"
                        v-model="userId"
                        required
                    ></v-text-field>
                </div>
            </div>
            <div class="mx-3">
                비밀번호
                <div class="mx-1">
                    <v-text-field
                        placeholder="userPassword"
                        type="password"
                        v-model="userPassword"
                        required
                    ></v-text-field>
                </div>
            </div>
            <!-- <div>
                <p class="main-text">아이디 로그인</p>
                <p calss="sub-text">아이디와 비밀번호를 입력해주세요.</p>
                <div class="form-group mb-3">
                    <label for="username">아이디</label>
                    <input type="text" class="form-control" id="username" name="username" />
                </div>
                <div class="form-group mb-3">
                    <label for="password">비밀번호</label>
                    <input type="password" class="form-control" id="password" name="password" />
                </div>
                <a href="#">회원가입</a>
                <div class="text-right">
                    <button type="button" class="btn btn-primary" onclick="login()">로그인</button>
                </div>
            </div> -->
        </body>
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      userId: null,
      userPassword: null,
    };
  },
  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.userId = this.userId;
      saveData.userPassword = this.userPassword;

      try {
        this.$axios
          .post(HOST + "/signin", JSON.stringify(saveData), {
            headers: {
              "Content-Type": `application/json`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              // 로그인 성공시 처리해줘야할 부분
              this.$store.commit("login", res.data);
              this.$router.push("이동할 페이지 path");
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
  
};
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
.mid-text {
    background-color: #E9F1FE;
    position: absolute;
    width: 187px;
    height: 48px;
    left: 53px;
    top: 135px;
}
.main-text {
    font-size: 18px;
    font-weight: bold;
}
.sub-text {
    font-size: 12px;
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