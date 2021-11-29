<template>
  <div class="container-fluid">
      <Header />
  <div class="container">
            <div class="dashboard">
              <div class="sidebar-dashboard">
                  <ul class="list-group list-group-flush">
                    <button class="list-group-item" :key="1" :class="{ active: index == 1 }" @click="setActive(1)">Quản lí sách</button>
                    <button class="list-group-item" :key="2" :class="{ active: index == 2 }" @click="setActive(2)">Quản lí đơn đặt hàng</button>
                  </ul>
              </div>
              <div class="main-dashboard">
                <div class="alert" v-if="message" :class="alert" role="alert">
                {{ message }}
                </div>
                  <div v-if="index == 1">
                      <div class="row">
                        <div class="col-4">
                          <router-link :to="`/add_product`" class="btn btn-outline-danger">Thêm sản phẩm</router-link>
                        </div>
                        <div class="col-4">
                          <button class="btn btn-outline-dark" @click="deleteProduct">Xóa sản phẩm</button>
                        </div>
                        <div class="col-4">
                          <button class="btn btn-outline-info" @click="setHot">Sản phẩm hot</button>
                        </div>
                      </div>
                      <div class="row">
                        <div v-for="product in products" :key="product._id">
                          <div class="col-md-2 checkbox">
                            <input type="checkbox" :value="product" v-model="selectProduct">
                          </div>
                          <ProductItem :item="product"/>
                        </div>
                      </div>
                  </div>
                  <div v-if="index == 2">
                      
                  </div>
              </div>
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
import ProductItem from "../components/ProductItem.vue";
export default {
    name:"AdminDashboard",
    data(){
      return {
        index: 1,
        products: [],
        selectProduct: [],
        message:"",
        fail: false,
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
      setActive(index){
        this.index = index;
      },
      async deleteProduct(){

        for(let i=0;i<this.selectProduct.length;i++){
          const [error] = await this.handle(ProductService.deleteProduct(this.selectProduct[i]._id));
          if(error){
            this.message = "Xóa không thành công, error:"+error;
            this.fail = true;
          }
        }
        if(!this.fail){
          this.message = "Xóa thành công";
          this.$router.go();
        }
      },
      async setHot(){
        for(let i=0;i<this.selectProduct.length;i++){
          const [error] = await this.handle(ProductService.setHot(this.selectProduct[i]._id, this.selectProduct[i].hot));
          if(error){
            this.message = "Cập nhật không thành công, error:"+error;
            this.fail = true;
          }
        }
        if(!this.fail){
          this.message = "Cập nhật thành công";
          this.$router.go();
        }
      }
    },
    components: {
      Header, Footer, ProductItem
    },
    created() {
      this.handle(ProductService.getAllProduct())
        .then(response => {
          this.products = response[1].data;
          console.log(this.products);
        });
        
    }
}
</script>

<style>
.checkbox {
  float: left;
  margin-top: 55px;
  width: 24px;
}
</style>