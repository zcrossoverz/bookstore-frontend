import OrderService from "../services/Order.service";
import { handle } from "../common/promise";

const state = {
    cart: []
};

const mutations = {
    async add_to_cart(state, {product}){
        state.cart.push({
            product
        });
    },
    async clear_cart(state){
        state.cart = [];
    }

};

const actions = {
    addToCart({commit}, product, quantity){
        commit('add_to_cart', {product, quantity});
    },
    async check_out({commit, getters}){
        let products = getters.getProductInCart;
        console.log(getters.getProductInCart);
        for(let i = 0;i<products.length;i++){
            const [error] = await handle(OrderService.addOrder({
                username: getters.loggedInUser.username,
                id: products[i].product.product._id,
                cover: products[i].product.product.cover,
                title: products[i].product.product.title,
                number: products[i].product.quantity,
                price: products[i].product.product.price,
                total: products[i].product.product.price*products[i].product.quantity
            }));
            if(error) {
                console.log('Error: '+error);
                break;
            }
        }
        commit('clear_cart');
    }
};

const getters = {
    getProductInCart(state){
        return state.cart;
    },
    getUsername(state){
        return state.user.username;
    }
};

export const cart = {
    state,
    mutations,
    actions,
    getters
};

