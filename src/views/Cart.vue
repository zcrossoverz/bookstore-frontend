<template>
    <div class="container-fluid">
        <Header />
        <div class="container">
            <div v-if="getProductInCart.length > 0">
                <div class="row" style="font-size:24px; padding: 8px 2px;">
                    Giỏ hàng của bạn  
                </div>
                <table class="table table-bordered">
                    <thead>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-4 table-head">
                                Tên
                            </div>
                            <div class="col-md-2 table-head">
                                Đơn giá
                            </div>
                            <div class="col-md-1 table-head">
                                Số lượng
                            </div>
                            <div class="col-md-1 table-head">
                                Xóa
                            </div>
                            <div class="col-md-2 table-head">
                                Thành tiền
                            </div>
                        </div>
                    </thead>
                    <tbody>
                        <tr v-for="item in getProductInCart" :key="item.product.product.id">
                            <ItemCart :item="item"/>
                        </tr>
                        <tr>
                            <div class="btn-checkout">
                                Tổng số tiền: {{ amount }} vnđ
                            </div>
                        </tr>
                    </tbody>
                </table>
                <button @click="check_out" class="btn btn-danger btn-checkout">Thanh toán</button>
            </div>
            <div v-else class="error">
                Giỏ hàng trống
            </div>
        </div>
    </div>
        <Footer />
</template>
<script>
import Header from "../components/Header.vue";
import ItemCart from "../components/ItemCart.vue";
import { mapGetters } from "vuex";
import Footer from "../components/Footer.vue";

export default {
    name:"Cart",
    components: {
        Header, ItemCart, Footer
    },
    computed: {
        ...mapGetters([
            "getProductInCart"
        ]),
    },
    methods: {
        async check_out(){
            const [error, response] = await this.handle(
                this.$store.dispatch("check_out")
            );
            if (error) {
                console.log(error);
                this.message = "Đăng nhập thất bại";
            } else {
                console.log(response);
            }
        }
    },
    data() {
        return {
            amount: 0
        }
    },
    created(){
        this.getProductInCart.forEach(e => {
            this.amount += (e.product.product.price*e.product.quantity);
        });
    }
}
</script>
<style>
.error{
    display: flex;
    justify-content: center;
    height: 300px;
    align-items: center;
}
.table-head {
    display: flex;
    justify-content: center;
    padding: 24px;
}
.container {
    min-height: 80vh;
}
.btn-checkout{
    float: right;
}
</style>