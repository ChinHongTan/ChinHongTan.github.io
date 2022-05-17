<script>
import TopNav from './components/TopNav.vue'
import AboutMe from './components/AboutMe.vue'

export default {
    name: 'App',
    data() {
        return {
        }
    },
    methods: {
    },
    components: {
        TopNav,
        AboutMe
    }
}
</script>

<template>
<div id="app">
    <TopNav />
    <AboutMe />
</div>
</template>

<style>
body {
    margin: 0;
    overflow-x: hidden;
}
</style>