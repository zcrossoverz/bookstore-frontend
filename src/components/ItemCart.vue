<template>
    <div class="item row">
            <div class="col-md-4 cover">
                cover
            </div>
            <div class="col-md-6 info-item">
                <div class="row">name</div>
                <div class="row">id</div>
            </div>
            <div class="col-md-2 number">
                number
            </div>
    </div>
</template>

<script>
export default {
    name:"ItemCard"
}
</script>
<style>
.item {
    padding: 0 16px;
}
.cover{
    background: blue;
}
.info-item{
    background: orange;
}
.number{
    background: rebeccapurple;
}
</style>