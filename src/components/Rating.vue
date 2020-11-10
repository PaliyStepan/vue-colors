<template lang="pug">
    .rating
        .rating__item(v-for="(item, key) in 5", :class="{active: key < rate}")
</template>

<script>
    export default {
        name: "Rating",
        props: {
            rate: {
                type: Number,
                default() {
                    return 0
                }
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/Styles/vars";

    .rating{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &__item {
            width: 16px;
            height: 16px;
            background-color: #ddd;
            margin-right: 2px;
            &.active {
                background-color: $green;
            }
        }
    }
</style>
