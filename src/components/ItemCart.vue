<template>
    <div class="item row">
            <div class="col-md-2 cover">
                <img :src="item.product.product.cover" height="120" width="80" />
            </div>
            <div class="col-md-4 info-item">
                {{ item.product.product.title }}
            </div>
            <div class="col-md-2 price-item">
                {{ item.product.product.price }} vnđ
            </div>
            <div class="col-md-1 quantity">
                {{ item.product.quantity }}
            </div>
            <div class="col-md-1 close" style="margin: 0 20px">
                <ThemifyIcon icon="close"/>
            </div>
            <div class="col-md-2 amount" style="margin: -20px">
                {{ item.product.product.price*item.product.quantity }} vnđ
            </div>
    </div>
</template>

<script>
import ThemifyIcon from "vue-themify-icons";

export default {
    name:"ItemCard",
    props: ["item"],
    components: {
        ThemifyIcon
    }
}
</script>
<style>
.item {
    margin: 0 16px;
    display: flex;
}
.item-cover{

    width: 12%;
}
.info-item{
    padding: 24px;
    justify-content: flex-start !important;
}
.quantity{
    
}
.cover, .price-item, .info-item, .quantity, .close, .amount {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>