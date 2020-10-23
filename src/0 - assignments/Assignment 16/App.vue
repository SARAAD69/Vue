<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <h1 v-if="selectedComponent === 'appBlue'">This is blue colour</h1>
                    <h1 v-else-if="selectedComponent === 'appGreen'">This is green colour</h1>
                    <h1 v-else>This is red colour</h1>
                </component>
                <!--<app-blue>
                    <h1>This is blue colour</h1>
                </app-blue>
                <app-green>
                    <h1>This is green colour</h1>
                </app-green>
                <app-red>
                    <h1>This is red colour</h1>
                </app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: () => {
            return {
                selectedComponent: Blue
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
