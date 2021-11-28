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
                  <div v-if="index == 1">
                      <div class="row">
                        <div class="col-4">
                          <button class="btn btn-outline-danger">Them san pham</button>
                        </div>
                        <div class="col-4">
                          <button class="btn btn-outline-dark">Xoa san pham</button>
                        </div>
                        <div class="col-4">
                          <button class="btn btn-outline-info">Them vao muc san pham hot</button>
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

export default {
    name:"AdminDashboard",
    data(){
      return {
        index: 1
      };
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
    components: {
      Header, Footer
    }
}
</script>

<style>

</style>