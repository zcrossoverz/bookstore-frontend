<template>
        <div class="item-product row">
            <div class="col-md-3 cover">
                <img :src="item.cover" height="90" width="70" />
            </div>
            <div class="col-md-6 info-item">
                {{ item.title }} 
            </div>
            <div class="col-md-2">
                <strong class="quantity-order"> x{{ item.number }}</strong>
            </div>
        </div>
</template>

<script>
export default {
    name:"ItemOrder",
    props: [
        "item"
    ]
}
</script>

<style>
.status-item-pending {
    background: rgb(226, 110, 154);
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-top: 24px;
}
.quantity-order {
    padding: 8px;
}

</style>