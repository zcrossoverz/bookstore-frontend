<template>
        <div class="item-product row">
            <div class="col-md-3 cover">
                <img :src="item.cover" height="90" width="70" />
            </div>
            <div class="col-md-6 info-item">
                {{ item.title }}
            </div>
            <div v-if="item.hot" class="col-md-2">
                <span class="badges">Hot</span>
            </div>
        </div>
</template>

<script>
export default {
    name:"ProductItem",
    props: [
        "item"
    ]
}
</script>

<style>
.item-product {
    padding: 12px;
    border-bottom: 1px solid #ccc;
}
.badges {
    line-height: 4.5;
    background: rgb(206, 37, 94);
    color: #fff;
    padding: 8px;
    border-radius: 50%;
    text-transform: translate(-50%,-50%);
}

</style>