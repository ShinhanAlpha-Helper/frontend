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
                <li class="breadcrumb"><a href="#">단어/뜻</a></li>&nbsp;&nbsp;
                <li class="breadcrumb active" aria-current="page">단어만</li>&nbsp;&nbsp;
                <li class="breadcrumb active" aria-current="page">뜻만</li>&nbsp;&nbsp;
            </ol>
            <main>
                <div class="vocas">
                    <div v-for="(voca, i) in vocas" :key="voca.i">
                        <div class="voca-item">
                            <div class="left-text">
                                <i class="far fa-star" :class="{ 'fas': voca.bookmarked }" @click="toggleBookmark(voca)"></i>
                                <strong class="voca-text">{{ voca.text }}</strong>
                            </div>
                            <b class="voca-del">
                                <a href="" @click.prevent="delItem(i)">삭제</a>
                            </b>
                        </div><hr>
                    </div>
                </div>
            </main>
        </nav>
    </div>
</template>


<script>
export default {
    data() {
        return {
            vocas: [
                {
                    text: "상한가 daskfjdjasf",
                    bookmarked: false
                },
                {
                    text: "매도 daskfjdjasf",
                    bookmarked: false
                },
                {
                    text: "매수 daskfjdjasf",
                    bookmarked: false
                },
                {
                    text: "선물 daskfjdjasf",
                    bookmarked: false
                },
                {
                    text: "주식 daskfjdjasf",
                    bookmarked: false
                },
            ],
            bookmarks: []
        }
    },
    methods: {
        toggleBookmark(voca) {
            voca.bookmarked = !voca.bookmarked;
            if (voca.bookmarked) {
                this.bookmarks.push(voca);
            } else {
                const index = this.bookmarks.indexOf(voca);
                this.bookmarks.splice(index, 1);
            }
        },
        delItem(index) {
            this.vocas.splice(index, 1);
        },
    },
    mounted() {
        const savedBookmarks = localStorage.getItem('bookmarks');
        if (savedBookmarks) {
            this.bookmarks = JSON.parse(savedBookmarks);
            this.bookmarks.forEach(bookmark => {
            const voca = this.vocas.find(v => v.id === bookmark.id);
            if (voca) {
                voca.bookmarked = true;
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

}
</script>

<style>
.breadcrumb {
    font-size: 11px;
}
h3 {
    font-size: 15;
    margin-right:30px;
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
}
.voca-del {
    margin-left: auto;
    font-size: 11px;
}

</style>