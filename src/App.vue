<script>
import TopNav from './components/TopNav.vue'
import AboutMe from './components/AboutMe.vue'
import About from './components/About.vue'

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
    AboutMe,
    About
}
}
</script>

<template>
<div id="app">
    <TopNav />
    <AboutMe />
    <About />
</div>
</template>

<style>
body {
    margin: 0;
    overflow-x: hidden;
}
</style>