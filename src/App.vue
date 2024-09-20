<script>
import TopNav from "./components/TopNav.vue";
import AboutMe from "./components/AboutMe.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Friends from "./components/Friends.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/Footer.vue";
import "./assets/base.css";

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
    ContactSection,
    Footer,
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
    <ContactSection />
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Cantora One");

body {
  margin: 0;
  overflow-x: hidden;
  background-color: var(--primary-color);
}
</style>
