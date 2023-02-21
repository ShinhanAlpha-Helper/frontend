<template>
    <div class="page">
        <header>
            <i class="fa-solid fa-arrow-left fa-2x fa-pull-left" onclick=""></i>
            <h3>
            단어장
            </h3>
        </header>
        <nav style="--bs-breadcrumb-divider:'';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb"><a href="#">단어/뜻</a></li>&nbsp;&nbsp;&nbsp;
                <li class="breadcrumb active" aria-current="page">단어만</li>&nbsp;&nbsp;&nbsp;
                <li class="breadcrumb active" aria-current="page">뜻만</li>
            </ol>
            <main>
                <div class="vocas">
                    <div v-for="(note, i) in notes" :key="note.i">
                        <div class="voca-item">
                            <div class="left-text">
                                <i class="far fa-star" :class="{ 'fas': note.bookmarked }" @click="toggleBookmark(note)"></i>
                                <strong class="voca-text">{{ note.title }}
                                    <br>
                                    <div class="voca-mean">{{ note.content }}</div>
                                </strong>
                            </div>
                            <b class="voca-del">
                                <a href="" @click.prevent="delItem(i)">삭제</a>
                            </b>
                        </div><hr>
                    </div>
                </div>
            </main>
        </nav>
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
import axios from 'axios';

export default {
    data() {
        return{
            notes: [],
            bookmarks: []
        }
    },
    created() {
        const token = localStorage["token"];
        if (!token) {
            console.error('Token not found');
            return;
        }
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/note',
            headers: {
                Authorization: 'JWT ' + token,
            },
        })
        .then(response => {
            this.notes = response.data.results;
        })
        .catch(error => {
            console.error(error);
        });
    },
    methods: {
        toggleBookmark(note) {
            note.bookmarked = !note.bookmarked;
            if (note.bookmarked) {
                this.bookmarks.push(note);
            } else {
                const index = this.bookmarks.indexOf(note);
                this.bookmarks.splice(index, 1);
            }
        },
        delItem(index) {
            axios({
                method: 'delete',
                url: 'http://127.0.0.1:8000/note',
                headers: {
                    Authorization: 'JWT ' + localStorage.token,
                },
                data: {
                    id: noteid,
                },
                }).then(response => {
                    alert('단어가 삭제되었습니다.');
                    location.reload();
                }).catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        const savedBookmarks = localStorage.getItem('bookmarks');
        if (savedBookmarks) {
            this.bookmarks = JSON.parse(savedBookmarks);
            this.bookmarks.forEach(bookmark => {
            const note = this.notes.find(n => n.id === bookmark.id);
            if (note) {
                note.bookmarked = true;
            }
            });
        }
    },
    watch: {
        bookmarks: {
            handler: function(bookmarks) {
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            },
            deep: true
        }
    }
    // mounted() {
    //     const savedBookmarks = localStorage.getItem('bookmarks');
    //     if (savedBookmarks) {
    //         this.bookmarks = JSON.parse(savedBookmarks);
    //         this.bookmarks.forEach(bookmark => {
    //         const voca = this.vocas.find(v => v.id === bookmark.id);
    //         if (voca) {
    //             voca.bookmarked = true;
    //         }
    //         });
    //     }
    // },
    // watch: {
    //     bookmarks: {
    //         handler: function(bookmarks) {
    //         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //         },
    //         deep: true
    //     }
    // }

}
</script>

<style>
.page {
    margin-top: 30px;
}
.breadcrumb {
    font-size: 11px;
}
.page header i {
    margin-left: 20px;
}
h3 {
    font-size: 15;
    margin-right:50px;
}
.fa-star {
    font-size: 20px;
    float: left;
    color: #ccc;
}

.fas {
    color: yellow;
}


.voca-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left-text {
    display: flex;
    align-items: center;
}
.voca-text {
    margin-left: 5px;
    text-align: left;
    font-size: 15px;
}
.voca-mean {
    font-size: 13px;
    color: #979797;
}
.voca-del {
    margin-left: auto;
    font-size: 11px;
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