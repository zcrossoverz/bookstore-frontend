<template>
    <div class="popular">
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>
        <Item :item="item"/>

    </div>
</template>

<script>
import Item from "./Item.vue";
export default {
    name:"PopularBook",
    components: {
        Item
    },
    data() {
        return {
            item: {
                title: "sach 1",
                author: "thong tin sach",
                price: 19.9999,
                id: 1,
                cover:"https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-2.jpg",
                desc: "",
                number: 0,
                category: []
            }
        }
    }
}
</script>
<style>
.popular {
    display: flex;
    margin-top: 12px;
    flex-wrap: wrap;
}
</style>