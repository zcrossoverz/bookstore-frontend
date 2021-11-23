<template>
  <div class="header">
    <div class="menu">
      <form class="d-flex search">
        <input class="form-control ms-4 mt-3" type="search" placeholder="Search" aria-label="Search">
      </form>
      <router-link :to="`/`"><img :src="require(`../assets/Logo.png`)" height="65" alt="logo" class="logo"/></router-link>
      <div>
        
          <router-link v-if="!currentUser" :to="`/login`" class="link">Đăng nhập</router-link>
          <router-link v-if="!currentUser" :to="`/register`" class="link">Đăng kí</router-link>

        <router-link :to="`/cart`">
          <a class="cart"><ThemifyIcon icon="bag" class="icon-cart"/>
            <div class="cart-info">
              <span class="cartCount">{{ getProductInCart.length }}</span>
            </div>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ThemifyIcon from "vue-themify-icons";
import { mapGetters } from "vuex";

export default {
  name: 'Header',
  components: {
    ThemifyIcon
  },
  data() {
    return {
      currentUser: null,
    };
  },
  methods: {
    logout() {
      console.log("logout");
    }
  },
  computed: {
        ...mapGetters([
            "getProductInCart"
        ]),
  },
}
</script>

<style>
.header {
  background: rgb(245, 213, 213);
  height: 80px;
  display: flex;
  align-items: center;
}
.logo {
  margin-right: 270px;
}
.menu {
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.menu-item {
    font-family: "Cormorant Garamond",sans-serif;
    font-size: 20px;
    line-height: 23px;
    font-weight: 500;
    width: 100px;
    text-decoration: none;
    margin: 12px;
}
.icon-cart {
  font-size: 24px;
  float: right;
  margin-top: 24px;
  margin-left: 16px;
  margin-right: 54px;
  position: relative;
}
.cart {
  color: black;
  
}
.cart:hover {
  color: rgb(248, 90, 90);
}

.link {
  color: black;
  text-decoration: none;
  font-size: 20px;
  padding: 8px;
  line-height: 3.5;
}
.search {
  width: 24%;
  height: 10%;
}
.cart-info {
  position: absolute;
    right: 68px;
    top: 18px;
    font-size: 11px;
    background: #f2735c;
    color: #fff;
    padding: 0 3px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
}
.cartCount {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
