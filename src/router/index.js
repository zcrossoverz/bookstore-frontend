import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage";
import ViewItem from "../views/ViewItem";
import Cart from "../views/Cart";
import Register from "../views/Register";
import Login from "../views/Login";
const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/product/:id",
        component: ViewItem
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/login",
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;