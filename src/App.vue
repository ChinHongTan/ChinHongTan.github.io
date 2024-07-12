<script>
import TopNav from "./components/TopNav.vue";
import AboutMe from "./components/AboutMe.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Friends from "./components/Friends.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    TopNav,
    AboutMe,
    About,
    Projects,
    Friends,
  },
};
</script>

<template>
  <div id="app">
    <TopNav />
    <AboutMe />
    <About />
    <Projects />
    <Friends />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Cantora One");

body {
  margin: 0;
  overflow-x: hidden;
}
</style>
