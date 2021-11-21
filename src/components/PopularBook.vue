<template>
    <div class="popular">
        <div v-for="item in items" :key="item.id">
            <Item :item="item" />
        </div>
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
            items: [
                {
                title: "50 Ways to Draw Your Beautiful, Ordinary Life: Practical Lessons in",
                author: "Paperback",
                price: 580000,
                id: 1,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9781523501151.jpg?v=1634361107000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Great World Writers Twentieth Century - Patrick M.O'neil",
                author: "Hardcover - Rare",
                price: 240000,
                id: 2,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/z2881714372397-6e76a1433ffec29c5d8cc256df7c7c05.jpg?v=1635741227000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Tiny Habits: The Small Changes That Change Everything by BJ",
                author: "Hardcover",
                price: 580000,
                id: 3,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9780358003328.jpg?v=1634361674000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Great World Writers Twentieth Century - Patrick M.O'neil",
                author: "Hardcover - Rare",
                price: 240000,
                id: 4,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9781401308278.jpg?v=1634361936000",
                desc: "",
                number: 0,
                category: []
                },
                {
                title: "Ninth House by Leigh Bardugo",
                author: "Paperback",
                price: 580000,
                id: 5,
                cover:"https://bizweb.dktcdn.net/thumb/large/100/282/917/products/9781250313072-4cda6be8-dcfd-40e1-9d6b-e04383579cb4.jpg?v=1634361795000",
                desc: "",
                number: 0,
                category: []
                },
                
            ]
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