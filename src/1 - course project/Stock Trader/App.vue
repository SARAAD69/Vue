<template>
    <div class="container">
        <app-header></app-header>
            <div class="row">
                <div class="col-xs-12">
                    <transition name="slide" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style lang='sass'>
    body
        padding: 30px

    .slide-enter-active
        animation: slide-in 200ms ease-out forwards

    .slide-leave-active
        animation: slide-out 200ms ease-out forwards

    @keyframes slide-in
        0%
            transform: translateY(-30px)
            opacity: 0
        100%
            transform: translateY(0)
            opacity: 1

    
    @keyframes slide-out
        0%
            transform: translateY(0)
            opacity: 1
        100%  
            transform: translateY(-30px)
            opacity: 0

</style>
