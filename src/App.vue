<template>
    <div class="container">
        <app-header></app-header>
            <div class="row">
                <div class="col-xs-12"></div>
            </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style lang='sass'>
    body
        padding: 30px
</style>
