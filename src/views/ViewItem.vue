<template>
    <div class="container-fluid">
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-md-4 img-cover">
                    <img :src="`${item.cover}`" height="500" width="390" alt="cover_img" srcset="">
                </div>
                <div class="col-md-8 info">
                    <h2>{{ item.title }}</h2>
                    <h5>Tac gia: {{ item.author }}</h5>
                    <p>{{ item.desc }}</p>
                    <p class="price">{{ item.price }} vnd</p>
                    So luong <input type="number" v-model="quantity" min="0" max="20" step="1"/> <button type="button" class="btn btn-danger" @click="addToCart">Them vao gio hang</button>
                </div>
                
            </div>
        </div>
    </div>
        <!-- <Footer /> -->
</template>
<script>
import Header from "../components/Header.vue";
// import Footer from "../components/Footer.vue";
import { mapGetters } from "vuex";

export default {
    name:"ViewItem",
    components: {
        Header
    },
    props: [
        "id"
    ],
    data() {
        return {
            item: null,
            quantity: 1,
            items: [
                {
                title: "50 Ways to Draw Your Beautiful, Ordinary Life: Practical Lessons in",
                id: 1,
                author: "Paperback",
                price: 580000,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9781523501151.jpg?v=1634361107000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Great World Writers Twentieth Century - Patrick M.O'neil",
                author: "Hardcover - Rare",
                price: 240000,
                id: 2,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/z2881714372397-6e76a1433ffec29c5d8cc256df7c7c05.jpg?v=1635741227000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Tiny Habits: The Small Changes That Change Everything by BJ",
                author: "Hardcover",
                price: 580000,
                id: 3,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9780358003328.jpg?v=1634361674000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Great World Writers Twentieth Century - Patrick M.O'neil",
                author: "Hardcover - Rare",
                price: 240000,
                id: 4,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9781401308278.jpg?v=1634361936000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Ninth House by Leigh Bardugo",
                author: "Paperback",
                price: 580000,
                id: 5,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9781250313072-4cda6be8-dcfd-40e1-9d6b-e04383579cb4.jpg?v=1634361795000",
                desc: "",
                number: 0,
                category: []
                },
                
            ],
        }
    },
    methods: {
        addToCart(){
            if(this.quantity > 0){
                this.$store.dispatch('addToCart', {
                    product: this.item,
                    quantity: this.quantity
                });
            }else{
                alert('ko co don hang')
            }
        }
    },
    computed: {
        ...mapGetters([
            "getProductInCart"
        ]),
    },
    created() {
        this.item = this.items[this.$route.params.id-1];
    },
}
</script>
<style>
.img-cover, .info {
    margin-top: 24px;
}

.info{
    letter-spacing: 0.2px;
    line-height: 1.8;
}
.price {
    line-height: 2;
    font-size: 32px;
}
</style>