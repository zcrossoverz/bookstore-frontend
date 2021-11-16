<template>
    <div class="container-fluid">
        <Header />
        <div class="container">
            <PopularBook />
        </div>
    </div>
        <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import PopularBook from "../components/PopularBook.vue";
import Footer from "../components/Footer.vue";
export default {
    name:"HomePage",
    components: {
        Header, PopularBook, Footer
    }
}
</script>