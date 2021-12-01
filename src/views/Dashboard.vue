<template>
  <div class="container-fluid">
      <Header />
      <div class="container">
            <div class="dashboard">
              <div class="sidebar-dashboard">
                  <ul class="list-group list-group-flush">
                    <button class="list-group-item" :key="1" :class="{ active: index == 1 }" @click="setActive(1)">Thông tin cá nhân</button>
                    <button class="list-group-item" v-if="!loggedInUser.isAdmin" :key="2" :class="{ active: index == 2 }" @click="setActive(2)">Đơn hàng của bạn</button>
                  </ul>
              </div>
              <div class="main-dashboard">
                  <div v-if="index == 1">
                    <p><strong><i class="fas fa-user"></i> Tên đăng nhập: </strong> {{loggedInUser.username}}</p>
                    <p><strong><i class="fas fa-at"></i> Email: </strong> {{loggedInUser.email}}</p>
                    <p><strong><i class="fas fa-building"></i> Địa chỉ:</strong> {{!loggedInUser.address ? 'Trống': loggedInUser.address}}</p>
                    <p><strong><i class="fas fa-fax"></i> Số điện thoại:</strong> {{!loggedInUser.phone ? 'Trống': loggedInUser.phone}}</p>
                    <p><router-link class="btn btn-dark" :to="`admin`" v-if="loggedInUser.isAdmin">Admin Dashboard</router-link> <router-link class="btn btn-success" :to="`edit_information`">Sửa thông tin</router-link></p>
                  </div>
                  <div v-if="index == 2">
                    <h5>Thông tin các đơn hàng của bạn</h5>
                    <ul v-for="order in orders" :key="order.id">
                      <ItemOrder :item="order"/>
                    </ul>
                  </div>
              </div>
            </div>
      </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";
import OrderService from "../services/Order.service";
import ItemOrder from "../components/ItemOrder.vue";

export default {
    name: "Dashboard",
    data() {
        return {
          index: 1,
          orders: [
          ]
        };
    },
    components: {
      Header, Footer, ItemOrder
    },
    computed: {
        ...mapGetters([
            "loggedInUser"
        ]),
    },
    methods: {
      setActive(index){
        this.index = index;
      }
    },
    created(){
      OrderService.getOrder({
        username: this.loggedInUser.username
      }).then(response => this.orders = response.data.order);
    }
}
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;
}
.main-dashboard {
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 12px;
}
.sidebar-dashboard {

}
.container{
  margin-bottom: 12px;
}
</style>