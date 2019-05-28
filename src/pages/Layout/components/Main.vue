<template>
    <div class="main-container">
        <div class="title-container">
            <h1>{{title}}</h1>
        </div>
        <div class="render-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        title() {
            return this.$route.meta.title
        }
    }
}
</script>
