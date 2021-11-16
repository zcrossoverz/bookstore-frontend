<template>
    <div class="container-fluid">
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-md-4 img-cover">
                    <img :src="`https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-2.jpg`" height="500" width="390" alt="cover_img" srcset="">
                </div>
                <div class="col-md-8 info">
                    <h2>Symphony Of Trilogy</h2>
                    <h5>Tac gia: JESSICA JOHNSON</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus odit libero ad veniam harum architecto vero facilis autem sint eum excepturi pariatur laboriosam saepe delectus natus, ut dolorum. Ab.
                    Quibusdam id officiis eos pariatur labore dolore voluptatem explicabo vero, nesciunt neque consequuntur enim sed sint provident autem beatae dolor excepturi dicta doloribus cumque quam? Architecto dolor ad molestiae ipsam.</p>
                    <p class="price">19.99$</p>
                    So luong <input type="number" value="0" min="0" max="20" step="1"/> <button type="button" class="btn btn-danger">Them vao gio hang</button>
                </div>
                
            </div>
        </div>
    </div>
        <!-- <Footer /> -->
</template>
<script>
import Header from "../components/Header.vue";
// import Footer from "../components/Footer.vue";

export default {
    name:"ViewItem",
    components: {
        Header
    }
}
</script>
<style>
.img-cover, .info {
    margin-top: 24px;
}

.info{
    letter-spacing: 0.2px;
    line-height: 1.8;
}
.price {
    line-height: 2;
    font-size: 32px;
}
</style>