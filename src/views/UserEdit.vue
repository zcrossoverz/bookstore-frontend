<template>
  <div class="container-fluid">
      <Header />
      <div class="container" v-if="loggedInUser">
        <div>{{ message }}</div>
                <label for="username">Tên đăng nhập</label>
                <div class="form-group">
                    <input
                    name="username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    v-model="loggedInUser.username"
                    />
                    
                </div>
                <label for="email_user">Email</label>
                <div class="form-group">
                    <input
                    name="email_user"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    v-model="loggedInUser.email"
                    />
                    
                </div>
                <label for="password">Mật khẩu</label>
                <div class="form-group">
                    <input
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="new_password"
                    />
                </div>
                <label for="address">Địa chỉ</label>
                <div class="form-group">
                    <input
                    name="address"
                    type="text"
                    class="form-control"
                    placeholder="address"
                    v-model="loggedInUser.address"
                    />
               
                </div>
                <label for="phone">Số điện thoại</label>
                <div class="form-group">
                    <input
                    name="phone"
                    type="text"
                    class="form-control"
                    placeholder="phone"
                    v-model="loggedInUser.phone"
                    />
                </div>
                <div class="form-group">
                    <div class="flex-center">
                        <button class="btn btn-primary btn-login" @click="userUpdate">Cập nhật</button>
                    </div>
                </div>
      </div>
      <div v-else class="container">Vui lòng đăng nhập</div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";
import UserService from "../services/User.service";
export default {
    name: "UserEdit",
    data() {
        return {
            message: "",
            new_password: "",
        };
    },
    components: {
      Header, Footer,
    },
    computed: {
        ...mapGetters([
            "loggedInUser"
        ]),
    },
    methods: {
        async userUpdate() {
            let data_update = this.loggedInUser;
            if(this.new_password) {
                data_update.password = this.new_password;
                console.log(this.new_password);    
            }
            console.log(data_update);
            const [error] = await this.handle(
                UserService.update(this.loggedInUser.id, data_update)
            );
            if (error) {
                console.log(error);
                this.message = "Cập nhật thất bại!";
            } else {
                this.message = "Cập nhật thành công! Vui lòng đăng nhập lại, tài khoản sẽ được logout sau 5 giây.. ";
                setTimeout(() => {
                    this.$router.replace("/");
                    this.$store.commit("logout");
                }, 5000);
            } 
        },
    },
}
</script>

<style>

</style>