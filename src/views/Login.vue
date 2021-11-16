<template>
    
    <div class="container-fluid">
        <Header />
        <div class="edit-form">
            <div v-if="message">{{ message }}</div>
            <h4>Đăng nhap</h4>
            <AuthForm
            :user="user"
            :isLogin="true"
            @user-submit="userLogin"
            />
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
    name:"Login",
    components: {
       AuthForm, Footer, Header
    },
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: ""
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
        async userLogin(user) {

            const [error] = await this.handle(
                this.$store.dispatch("login", user)
            );
            if (error) {
                console.log(error);
                this.message = "Đăng nhập thất bại";
            } else {
                this.$router.push("/");
            }
        },
    },
    
}
</script>

<style>

</style>