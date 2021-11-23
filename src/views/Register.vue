<template>
    <div class="container-fluid">
        <Header />
    <div class="container">
        <div class="edit-form">
            <div v-if="message">
                {{ message }}
            </div>
            <h5 class="flex-center h5-text-auth">Đăng kí tài khoản</h5>
            <AuthForm
            :user="user"
            :isLogin="false"
            @user-submit="handleRegister"
            />
        </div>
    </div>
    </div>
    <Footer />
</template>

<script>
import AuthForm from "../components/AuthForm.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";

export default {
    name:"Register",
    components: {
       AuthForm, Footer, Header
    },
    data() {
        return {
            user: {
                
            },
            message: "",
        }
    },
    computed: {
        ...mapGetters([
            "userLoggedIn"
        ]),
    },
    methods: {
        async handleRegister(user) {
            this.message = "";
            const [error] = await this.handle(
                this.$store.dispatch("register", user)
            );
            if (error) {
                console.log(error);
                this.message = "Đăng ký thất bại";
            } else {
                this.message = "Dang ki thanh cong";
            }
        },
    },
    mounted(){
        this.message = "";
    }
};
</script>

<style>
.h5-text-auth {
    font-weight: 400;
}
</style>