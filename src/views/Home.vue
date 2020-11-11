<template lang="pug">
    .content
        .sec-slider
            breadcrumbs
            slider
        catalog
</template>

<script>
    import Slider from "../components/Slider";
    import Breadcrumbs from "../components/UI/Breadcrumbs";
    import Catalog from "../components/Catalog";

    export default {

        name: "Home",
        components: {
            Slider,
            Breadcrumbs,
            Catalog
        },
    }
</script>

<style>
    .sec-slider{
        position: relative;
    }


</style>
