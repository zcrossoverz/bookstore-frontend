<template>
  <div class="container-fluid">
      <Header />
      <div class="container">
        <div>{{ message }}</div>
            <Form
            :validation-schema="schema"
            >
                <label for="username">Tên đăng nhập</label>
                <div class="form-group">
                    <Field
                    name="username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    v-model="loggedInUser.username"
                    />
                    <ErrorMessage name="username" class="error-feedback" />
                </div>
                <label for="email_user">Email</label>
                <div class="form-group">
                    <Field
                    name="email_user"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    v-model="loggedInUser.email"
                    />
                    <ErrorMessage name="email_user" class="error-feedback" />
                </div>
                <!-- <label for="password">Mật khẩu</label>
                <div class="form-group">
                    <Field
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="new_password"
                    />
                    <ErrorMessage name="password" class="error-feedback" />
                </div> -->
                <label for="address">Địa chỉ</label>
                <div class="form-group">
                    <Field
                    name="address"
                    type="text"
                    class="form-control"
                    placeholder="address"
                    v-model="loggedInUser.address"
                    />
                    <ErrorMessage name="address" class="error-feedback" />
                </div>
                <label for="phone">Số điện thoại</label>
                <div class="form-group">
                    <Field
                    name="phone"
                    type="text"
                    class="form-control"
                    placeholder="phone"
                    v-model="loggedInUser.phone"
                    />
                    <ErrorMessage name="phone" class="error-feedback" />
                </div>
                <div class="form-group">
                    <div class="flex-center">
                        <button class="btn btn-primary btn-login" @click="userUpdate">Đăng nhập</button>
                    </div>
                </div>
            </Form>
      </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import UserService from "../services/User.service";
export default {
    name: "UserEdit",
    data() {
        const schema = yup.object().shape({
        username: yup
            .string()
            .min(3, "Tên đăng nhập phải ít nhất 3 kí tự.")
            .max(12, "Tên đăng nhập có nhiều nhất 12 kí tự."),
        email: yup
            .string()
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
        password: yup.string()
                    .min(3, "Mật khẩu tối thiểu 3 kí tự."),
        });
        return {
            schema,
            message: "",
            new_password: ""
        };
    },
    components: {
      Header, Footer, Form, Field, ErrorMessage,
    },
    computed: {
        ...mapGetters([
            "loggedInUser"
        ]),
    },
    methods: {
        async userUpdate() {
            let data_update = this.loggedInUser;
            if(this.new_password) data_update.password = this.new_password;
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