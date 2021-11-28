<template>
    <div class="popular">
        <div v-for="item in items" :key="item.id">
            <Item :item="item" />
        </div>
    </div>
</template>

<script>
import Item from "./Item.vue";
import http from "../common/http";

export default {
    name:"PopularBook",
    components: {
        Item
    },
    data() {
        return {
            items: []
        }
    },
    created() {
        http.get("/product")
        .then(response => {
            this.items = response.data;
        });
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