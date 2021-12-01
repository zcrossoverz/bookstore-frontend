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
                        <div v-if="products.length == 0">
                          Chưa có sản phẩm nào
                        </div>
                        <div v-for="product in products" :key="product._id">
                          <div class="col-md-2 checkbox">
                            <input type="checkbox" :value="product" v-model="selectProduct">
                          </div>
                          <ProductItem :item="product"/>
                        </div>
                      </div>
                  </div>
                  <div v-if="index == 2">
                      <div class="qldon">
                        <div v-for="user in orders" :key="user._id" class="don">
                          <div v-if="user.order.length > 0">
                            <p><strong><i class="fas fa-user"></i> Tên đăng nhập: </strong> {{user.username}}</p>
                            <p><strong><i class="fas fa-at"></i> Email: </strong> {{user.email}}</p>
                            <p><strong><i class="fas fa-building"></i> Địa chỉ:</strong> {{!user.address ? 'Trống': user.address}}</p>
                            <p><strong><i class="fas fa-fax"></i> Số điện thoại:</strong> {{!user.phone ? 'Trống': user.phone}}</p>
                            <button class="btn btn-success" @click="doneOrder(user.username)">Đánh dấu đã giao hàng</button>
                            <div v-for="order in user.order" :key="order.id">
                              <ItemOrder :item="order"/>
                            </div>
                          </div>
                          
                        </div>
                          <div v-if="emptyOrder">
                            Đơn đặt hàng trống
                          </div>
                      </div>
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
import ItemOrder from "../components/ItemOrder.vue";
import OrderService from "../services/Order.service";
import UserService from "../services/User.service";

export default {
    name:"AdminDashboard",
    data(){
      return {
        index: 1,
        products: [],
        selectProduct: [],
        message:"",
        fail: false,
        orders: [],
        emptyOrder: true
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
      },
      async doneOrder(user){
        const [error] = await this.handle(OrderService.clearOrder({
          username: user
        }));
        if(error){
            this.message = "Cập nhật không thành công, error:"+error;
            this.fail = true;
        }else{
          this.fail = false;
          this.message = "Đánh dấu đã giao thành công, đang cập nhật lại dữ liệu";
          this.$router.go();
        }
      }
    },
    components: {
      Header, Footer, ProductItem, ItemOrder
    },
    created() {
      this.handle(ProductService.getAllProduct())
        .then(response => {
          this.products = response[1].data;
          // console.log(this.products);
        });
      this.handle(OrderService.getAllOrder())
        .then(response => {
          this.orders = response[1].data;
          for(let i=0;i<this.orders.length;i++){
            if(this.orders[i].order.length > 0) this.emptyOrder = false;
            this.handle(UserService.getInfo({
              username: this.orders[i].username
            })).then(response => {
              let data = response[1].data;
              this.orders[i].phone = data.phone;
              this.orders[i].address = data.address;
              this.orders[i].email = data.email;
            });
          }
          // console.log(response[1].data);
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
.qldon {
  padding: 12px;
}

.don {
  margin-bottom: 12px;
}
</style>