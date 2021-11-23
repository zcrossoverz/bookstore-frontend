const state = {
    cart: []
};

const mutations = {
    add_to_cart(state, {product}){
        state.cart.push({
            product
        })
    }
};

const actions = {
    addToCart({commit}, product, quantity){
        commit('add_to_cart', {product, quantity});
    }
};

const getters = {
    getProductInCart(state){
        return state.cart;
    }
};

export const cart = {
    state,
    mutations,
    actions,
    getters
};

