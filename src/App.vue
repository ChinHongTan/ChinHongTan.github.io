<script>
import TopNav from './components/TopNav.vue'
import AboutMe from './components/AboutMe.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

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
        About,
        Projects
    }
}
</script>

<template>
<div id="app">
    <TopNav />
    <AboutMe />
    <About />
    <Projects />
</div>
</template>

<style>
body {
    margin: 0;
    overflow-x: hidden;
}
</style>