<template lang="pug">
    .content
        .sec-slider
            breadcrumbs
            slider
        products
</template>

<script>
    import Slider from "../components/Slider";
    import Breadcrumbs from "../components/Breadcrumbs";
    import Products from "../components/Catalog";

    export default {

        name: "Home",
        components: {
            Slider,
            Breadcrumbs,
            Products
        },
    }
</script>

<style>
    .sec-slider{
        position: relative;
    }


</style>
