<template>
<div class="form-auth">
    <div class="form-container">
        <Form
        :validation-schema="schema"
        >
            <div class="form-group">
                <Field
                name="username"
                type="text"
                class="form-control"
                placeholder="Username"
                v-model="userData.username"
                />
                <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="form-group" v-if="!isLogin">
                <Field
                name="email_user"
                type="text"
                class="form-control"
                placeholder="Email"
                v-model="userData.email"
                />
                <ErrorMessage name="email_user" class="error-feedback" />
            </div>
            <div class="form-group">
                <Field
                name="password"
                type="current-password"
                class="form-control"
                placeholder="Password"
                v-model="userData.password"
                />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="form-group">
                <div class="flex-center">
                    <button v-if="isLogin" class="btn btn-primary btn-login" @click="$emit('user-submit', userData)">Đăng nhập</button>
                    <button v-else class="btn btn-primary btn-login" @click="$emit('user-submit', userData)">Đăng kí</button>
                </div>
            </div>
        </Form>
    </div>
</div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    name:"AuthForm",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["user-login"],
    props: ["user","isLogin"],
    data() {
        const schema = yup.object().shape({
        username: yup
            .string()
            .required("Tên đăng nhập không được bỏ trống.")
            .min(3, "Tên đăng nhập phải ít nhất 3 kí tự.")
            .max(12, "Tên đăng nhập có nhiều nhất 12 kí tự."),
        email: yup
            .string()
            .required("Email không được bỏ trống.")
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
        password: yup.string()
                    .required("Mật khẩu không được bỏ trống.")
                    .min(3, "Mật khẩu tối thiểu 3 kí tự."),
        });
        return {
            schema,
            userData: this.user
        };
    },
}
</script>

<style>
.form-auth {
    display: flex;
    justify-content: center;
}
.form-container {
    min-width: 35vw;
}
.flex-center {
    display: flex;
    justify-content: center;
}
.form-group {
    padding: 8px;
}
.btn-login {
    border-radius: 8px;
    border: 1px solid;
    border: #fcfafa;
    background: #f5455f;
    padding: 8px 24px;
}

.btn-login:hover {
    border-radius: 8px;
    border: #f5455f;
    border: 1px solid;
    background: #f7f2f2;
    color: #f5455f;
}
.error-feedback {
    color: red;
}
</style>