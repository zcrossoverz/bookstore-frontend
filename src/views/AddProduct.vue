<template>
  <div class="container-fluid">
      <Header />
  <div class="container">
      <div class="form-container">
            <div class="alert" v-if="message" :class="alert" role="alert">
            {{ message }}
            </div>
            <label for="basic-url" class="form-label">Tiêu đề sách</label>
                <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="product.title">
            </div>
            <label for="basic-url" class="form-label">Tác giả</label>
                <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="product.author">
            </div>
            <label for="basic-url" class="form-label">Link ảnh bìa</label>
                <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="product.cover">
            </div>
            <label for="basic-url" class="form-label">Mô tả</label>
                <div class="input-group mb-3">
                <textarea class="form-control" aria-label="With textarea" v-model="product.desc"></textarea>
            </div>
            <label for="basic-url" class="form-label">Đơn giá</label>
                <div class="input-group mb-3">
                <input type="number" class="form-control" v-model="product.price">
                <span class="input-group-text"> vnđ</span>
            </div>
            <label for="basic-url" class="form-label">Số lượng</label>
                <div class="input-group mb-3">
                <input type="number" class="form-control" v-model="product.number">
                <span class="input-group-text">quyển</span>
            </div>
            <button class="btn btn-outline-secondary" type="button" @click="addProduct">Thêm</button>
      </div>
  </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";
import ProductService from "../services/Product.service";
export default {
    name:"AddProduct",
    data(){
      return {
        product: {
            title: "",
            author: "",
            cover: "https://",
            desc: "",
            price: 0,
            number: 0,
        },
        message: "",
        fail: false
      };
    },
    computed: {
        ...mapGetters([
            "loggedInUser"
        ]),
        alert() {
            if(!this.fail) return 'alert-success';
            else return 'alert-danger';
        }
    },
    methods: {
        async addProduct() {
            const [error] = await this.handle(
                ProductService.addProduct(this.product)
            );
            if(error){ 
                this.message = "Thêm sản phẩm thất bại";
                this.fail = true;
            }
            else{
                this.fail = false;
                this.message = "Thêm sản phẩm thành công";
            } 
        }
    },
    components: {
      Header, Footer
    }
}
</script>

<style>

</style>