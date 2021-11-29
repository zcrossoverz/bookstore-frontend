import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage";
import ViewItem from "../views/ViewItem";
import Cart from "../views/Cart";
import Register from "../views/Register";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import UserEdit from "../views/UserEdit";
import AdminDashboard from "../views/AdminDashboard";
import AddProduct from "../views/AddProduct";
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
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/edit_information",
        component: UserEdit
    },
    {
        path: "/admin",
        component: AdminDashboard
    },
    {
        path: "/add_product",
        component: AddProduct
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;