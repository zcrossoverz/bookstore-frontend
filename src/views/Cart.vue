<template>
    <div class="container-fluid">
        <Header />
        <div class="container">
            <div class="row">
                Giỏ hàng   
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="row mt-4">
                        <ItemCart />
                    </div>
                    <div class="row mt-4">
                        <ItemCart />
                    </div>
                    <div class="row mt-4">
                        <ItemCart />
                    </div>
                </div>
                <div class="col-md-4 summary">
                    Total Order
                </div>
            </div>
        </div>
    </div>
        <!-- <Footer /> -->
</template>
<script>
import Header from "../components/Header.vue";
import ItemCart from "../components/ItemCart.vue";


export default {
    name:"Cart",
    components: {
        Header, ItemCart
    }
}
</script>
<style>
.summary{
    height: 300px;
    background: #ccc;
}
</style>