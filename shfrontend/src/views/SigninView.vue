<template>
<div class="page">
      <header>
            <i class="fa-solid fa-xmark fa-2x fa-pull-right" onclick=""></i>
             <h3>
                회원가입
            </h3>          
        </header>
        
<div class="signinpage">
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
        <button type="button" class="btn btn-primary" onclick="signin()">회원가입</button>
    </div>


</form>
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

</div>
</template>

<script>
export default {
    data() {
    
    },
    methods: {
    	
   
    }}
</script>



<style scoped>

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

.signinpage {
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