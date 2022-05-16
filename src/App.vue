<script>
import TopNav from './components/TopNav.vue'

export default {
    name: 'App',
    data() {
        return {
            toggle: false,
            message: 'Hello Vue!'
        }
    },
    methods: {
        toggleMessage() {
            this.toggle = !this.toggle
            this.message = this.toggle ? 'Hello Vue!' : 'Hello OwO!'
        }
    },
    components: {
        TopNav
    }
}
</script>

<template>
<div id="app">
    <TopNav />
    <h1>{{ message }}</h1>
    <button @click="toggleMessage">
        Click me!
    </button>
</div>
</template>

<style>
body {
    margin: 0;
    overflow-x: hidden;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/81274446_p0.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>