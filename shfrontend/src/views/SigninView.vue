<template>
<div class="page">
      <header>
            <i class="fa-solid fa-xmark fa-2x fa-pull-right" onclick=""></i>
             <h3>
                회원가입
            </h3>          
        </header>
        
<div class="background"><br><br>
  <form>

    <div class="form-group">
        <label for="idInput"></label>
        <input type="text" class="form-control" id="idInput" placeholder="아이디">
    </div>
    <div class="form-group">
        <label for="pwInput"></label>
        <input type="password" class="form-control" id="pwInput" placeholder="비밀번호">
    </div>

    <div class="form-group">
        <label for="pwConfirm"></label>
        <input type="password" class="form-control" id="pwConfirm" placeholder="비밀번호 확인">
    </div>
  
    <div class="form-group">
        <label for="E-mail"></label>
        <input type="email" class="form-control" id="pwConfirm" placeholder="E-mail">
    </div>
    <br>
    <div class="text-right">
        <button type="button" class="btn btn-primary" onclick="signin()">회원가입</button>
    </div>


</form></div>

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