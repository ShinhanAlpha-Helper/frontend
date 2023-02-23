<template>
    <div class="page">
        <header style="margin-top: 30px; text-align: right;">
            <a @click="showSearch"><i class="fa-solid fa-magnifying-glass-plus fa-2x" style="margin-right: 10px;"></i></a>
            <router-link to="/news"><i class="fa-solid fa-xmark fa-2x" style="margin-right: 10px; color:black;"></i></router-link>
        </header>
        <main>
            <!-- Modal -->
            <b-modal v-model="searchModal" hide-footer>
                <div>
                    <div class="mb-3">
                        <label for="title" class="col-form-label">검색창</label>
                        <textarea class="form-control" id="title" v-model="title"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="button" class="btn btn-primary" @click="search">검색</button>
                    </div>
                </div>

                <div>
                    <div id="content">
                        <p>{{ content }}</p>
                        <div id="questionAdd" class="modal-footer" v-if="content">
                            <button 
                            class="btn btn-primary"
                             @click="AddWord(title, content)
                             ">단어장에 추가</button>
                        </div>
                    </div>
                </div>
            </b-modal>
            <b-modal  v-model="confirmModal" hide-footer>
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">'{{title}}'가<br> 단어장에 추가되었습니다.</h1>
                <div class="modal-footer">
                    <router-link to="/vocamain"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">단어장으로 가기</button></router-link>
                </div>
            </b-modal>

            <!-- <iframe src="https://finance.naver.com/news/news_read.naver?article_id=0004813432&office_id=015&mode=LSS2D&type=0&section_id=101&section_id2=258&section_id3=&date=20230222&page=1" 
            frameborder="0" style="display: block; width: 375px; height: 600px"></iframe> -->
            <iframe :src="$route.query.url"
            frameborder="0" style="display: block; width: 375px; height: 600px"></iframe>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            content: '',
            confirmModal: false,
            searchModal: false,
        }
    },
    created() {
        
    },
    mounted() {
        const title = localStorage.getItem("title");
        const content = localStorage.getItem("content");
        if (title && content) {
            this.title = title;
            this.content = content;
            localStorage.removeItem("title");
            localStorage.removeItem("content");

            this.AddWord(title, content);
        }
    },
    methods: {
        showSearch() {
            this.title = null;
            this.content = null;
            this.searchModal = true;
        },
        // 단어 검색
        search() {
            axios({
                method: 'get',
                // url: `http://127.0.0.1:8000/dict?title=${this.title}`,
                url: `http://127.0.0.1:8000/api/dict?title=${this.title}`,
            })
            .then(response => {
                this.content = response.data[0].content;
                console.log(content)
            })
            .catch(error => {
                console.error(error);
            })
        },
        // 단어장에 추가
        AddWord(title, content) {
            const token = localStorage["token"];
            if (!token) {
                console.error('Token not found');
                localStorage.setItem("title",title);
                localStorage.setItem("content",content);
                this.$router.push({path:'/loginerror'});
                return;
            }
            axios({
                method: 'post',
                // url: 'http://127.0.0.1:8000/note',
                url: 'http://127.0.0.1:8000/api/note',
                headers: {
                    Authorization: 'JWT ' + token,
                },
                data: {
                    title,
                    content
                },
            })
            .then(response => {
                console.log(response.status);
                this.searchModal = false;
                this.confirmModal = true;
            })
            .catch(error => {
                console.error(error);
                // this.$router.push({path:'/loginerror'});
            });
        }
    }
}

</script>


<style scoped>
.page {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 375px;
}
.modal-dialog.modal-dialog-centered {
  display: inline-block;
  text-align: left;
  width: 250px;
  /* vertical-align: middle;  */
}
.modal.fade1{
  /* width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: top; */
  text-align: center;
}
.btn.btn-primary {
    background-color: #3F81D7;
}
.btn.btn-secondary{
    background-color: #3F81D7;
}


    header {
        margin-top: 30px;
    }   

    #flexbetween {
        display: flex;
        justify-content: space-between;
    }

    #flexaround {
        display: flex;
        justify-content: space-around;
    }

    select {
        width: 180px;
    }

    #flexaround .header_a {
        color: black;
        text-decoration: none;
        font-size: 15px;
        color: #656565;
    }

    #flexaround .header_a:hover {
        font-weight: bold;
    }
</style>