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
        <Footer />
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from "vuex";
import http from "../common/http";

export default {
    name:"ViewItem",
    components: {
        Header, Footer
    },
    props: [
        "id"
    ],
    data() {
        return {
            item: null,
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
        http.get(`/product/${this.$route.params.id}`)
        .then(response => {
            this.item = response.data;
        });
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