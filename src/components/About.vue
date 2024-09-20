<template>
  <div id="about" ref="aboutRef" class="about">
    <div class="about-card">
      <div class="about-image">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: { duration: 1000, delay: 100 },
          }"
          class="about-image-container"
        >
          <img alt="" src="../assets/avatar_big.jpg" />
          <div :style="rotatingBorderStyle" class="rotating-border-about"></div>
        </div>
        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 100 },
          }"
        >
          About Me
        </p>
      </div>
      <div class="about-content">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 100 },
          }"
        >
          Hi there!
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 100 },
          }"
        >
          My name is Chinono, or in Mandarin 智乃乃. I am a big fan of Chino
          Kafuu! Currently 17 years old, and studying as a high school student
          in Malaysia. I can communicate in both Mandarin and English. Sure I
          can speak Malay, but English is preferred. As the covid 19 outbreak is
          especially serious in my country, I remain study at home around a year
          in total. Although I can’t leave my home due to the lockdown issued by
          the government, I am able to develop my coding hobby with more time
          than before.
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 100 },
          }"
        >
          Coding is one of my greatest hobby, and I enjoy doing it everyday.
          Currently, I can only code in JavaScript and Python, though I set my
          target to reach an intermediate level of JavaScript and Python, and
          aim for C++ next year. (except I didn't learn it even after 2 years
          XD)
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 100 },
          }"
        >
          Besides coding, I also love solving math problems and watching youtube
          videos like science experiments and documentaries. And just like other
          teens of my age, I enjoys anime very much, just because they are
          cuteeeee &lt;3 I am very fortunate to have a group of friends. We
          learn together, and support each other. I am really grateful to them.
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 100 },
          }"
        >
          Also, I am a boy, please.
        </p>
      </div>
      <div class="about-overlay"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useIntersectionObserver, useRafFn } from "@vueuse/core";

const gradientPosition = ref(0);
const aboutRef = ref(null);

const rotatingBorderStyle = computed(() => ({
  background: `linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82,
    #f79533
  )`,
  backgroundSize: "1000% 100%",
  backgroundPosition: `${gradientPosition.value}% 50%`,
}));

const { pause, resume } = useRafFn(
  () => {
    gradientPosition.value = gradientPosition.value + 0.5;
  },
  { immediate: true }
);

useIntersectionObserver(aboutRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    resume();
  } else {
    pause();
  }
});
</script>

<style>
.about {
  padding-top: 30px;
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
  position: relative;
}

.about-card {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--lighter-pink);
  padding: 20px;
  margin: 20px;
}

.about-content {
  margin-right: 7%;
  margin-left: 2%;
  font-style: normal;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}

.about-content h1 {
  font-size: 55px;
  line-height: normal;
  margin-bottom: auto;
}

.about-image {
  margin-left: 7%;
  margin-right: 4%;
}

.about-image-container {
  position: relative;
  width: 255px;
  height: 255px;
  border-radius: 50%;
  overflow: visible;
}

.about-image-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  z-index: 2;
  object-fit: cover;
}

.rotating-border-about {
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  opacity: 1;
  z-index: 1;
}

.about-image p {
  font-size: 55px;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  text-align: center;

  margin: auto;
}

.about-image img {
  width: 250px;
  height: auto;
  border-radius: 50%;
}

.about-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    var(--primary-color-light)
  );
  z-index: 2;
}
</style>
