<template lang="pug">
    .select(:class="{active: isVisible}")
        .select__trigger
            .select__title(@click="showList")
                | {{selected}}
            img(src="../../assets/img/arrow.svg")
        .select__list(v-show="isVisible")
            .select__item(
                v-for="option in options"
                :key="option.name"
                @click="selectOption(option)"
                )
                | {{option.name}}

</template>

<script>
    export default {
        name: "Select",
        props:{
            options:{
                type: Array,
                default(){
                    return []
                }
            },
            selected: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        data:()=>({
            isVisible: false
        }),
        methods:{
            selectOption(option){
                this.$emit('select', option);
                this.hideList();
                this.$emit('showBg');
            },
            hideList(){
                this.isVisible = false;
            },
            showList(){
                this.isVisible = true;
                this.$emit('showBg');
                let html = document.querySelector('html');
                html.classList.add('fixed')
            }
        },
        mounted() {
            document.addEventListener('click', this.hideList.bind(this), true);
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideList);
        }
    }
</script>

<style lang="scss">
    @import "../../assets/Styles/vars";
    .select{
        position: relative;
        &.active{
            position: relative;
            z-index: 45;
        }
        &__bg {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: red;
            z-index: 60;
        }
        &__trigger {
            display: flex;
            align-items: center;
        }
        &__title{
            cursor: pointer;
            position: relative;
            margin-right: 4px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.06em;
            font-weight: 500;
        }
        &__list {
            position: absolute;
            width: 280px;
            right: 0;
            top: 0;
            background-color: #fff;
        }
        &__item {
            cursor: pointer;
            height: 48px;
            padding: 10px 24px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 500;
            &:hover {
                background-color: $green;
            }
        }
    }
</style>
