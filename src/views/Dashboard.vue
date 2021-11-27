<template>
  <div class="container-fluid">
      <Header />
      <div class="container">
            <div class="dashboard">
              <div class="sidebar-dashboard">
                  <ul class="list-group list-group-flush">
                    <button class="list-group-item" :key="1" :class="{ active: index == 1 }" @click="setActive(1)">Thông tin cá nhân</button>
                    <button class="list-group-item" :key="2" :class="{ active: index == 2 }" @click="setActive(2)">Đơn hàng của bạn</button>
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
                      <li>{{order.title}}</li>
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

export default {
    name: "Dashboard",
    data() {
        return {
          index: 1,
          orders: [
            {
              title:"sach 1",
              cover:"",
              id:1
            },
            {
              title:"sach 2",
              cover:"",
              id:2
            },
            {
              title:"sach 3",
              cover:"",
              id:3
            }
          ]
        };
    },
    components: {
      Header, Footer
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
  background: palegoldenrod;
  padding: 16px 24px;
}
.sidebar-dashboard {

}
</style>