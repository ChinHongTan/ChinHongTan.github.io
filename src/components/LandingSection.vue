<template>
  <div id="home" ref="elementRef" class="mainContent">
    <div class="overlay"></div>
    <div class="myInfo">
      <div class="myInfo-img">
        <div :style="rotatingBorderStyle" class="rotating-border"></div>
        <img alt="" src="../assets/avatar_big.jpg" />
      </div>
      <div class="myInfo-text">
        <h1>Chinono</h1>
      </div>
      <div class="myInfo-additional">
        <div class="additional-info-sentence">
          <span id="typewriter"></span>
        </div>
        <div class="additional-info-location">
          <span>Malaysia</span>
        </div>
      </div>
    </div>
    <div class="gradient-overlay"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useIntersectionObserver, useRafFn } from "@vueuse/core";

const sentences = [
  "Jeez, lolis are the best!",
  "Chino is the best girl in the world!!",
  "I am NOT Chinono Intellegence!!!",
  "Please, I am a boy!",
];

const currentSentence = ref(0);
const currentChar = ref(0);
const isDeleting = ref(false);
let typewriterElement = ref(null);

const gradientPosition = ref(0);
const elementRef = ref(null);

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

function typeWriter() {
  const currentText = sentences[currentSentence.value];

  if (isDeleting.value) {
    typewriterElement.value.textContent = currentText.substring(
      0,
      currentChar.value - 1
    );
    currentChar.value--;
  } else {
    typewriterElement.value.textContent = currentText.substring(
      0,
      currentChar.value + 1
    );
    currentChar.value++;
  }

  let typingSpeed = 100;

  if (isDeleting.value) {
    typingSpeed /= 2;
  }

  if (!isDeleting.value && currentChar.value === currentText.length) {
    typingSpeed = 2000; // Pause at the end
    isDeleting.value = true;
  } else if (isDeleting.value && currentChar.value === 0) {
    isDeleting.value = false;
    currentSentence.value = (currentSentence.value + 1) % sentences.length;
    typingSpeed = 500; // Pause before starting new sentence
  }

  setTimeout(() => typeWriter(), typingSpeed);
}

const { pause, resume } = useRafFn(
  () => {
    gradientPosition.value = gradientPosition.value + 0.5;
  },
  { immediate: true }
);

useIntersectionObserver(elementRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    resume();
  } else {
    pause();
  }
});

onMounted(() => {
  typewriterElement.value = document.getElementById("typewriter");
  typeWriter();
});
</script>

<style>
.mainContent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  min-height: 100vh;
  max-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/81274446_p0.jpg");
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1;
}

.myInfo {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.myInfo-img {
  width: 150px;
  height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border-radius: 50%;
}

.myInfo-img img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.myInfo-img:hover img {
  transform: scale(1.05);
}

.myInfo-text {
  letter-spacing: 2px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.myInfo-text:hover {
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: pulse 2s infinite;
}

.myInfo-additional {
  letter-spacing: 2px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.myInfo-additional:hover {
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.myInfo-text,
.myInfo-additional {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.rotating-border {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
  will-change: transform;
}

.myInfo-img:hover .rotating-border {
  opacity: 1;
  filter: blur(10px);
}

.additional-info-location {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}

.additional-info-location::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url("../assets/location.svg");
  background-repeat: no-repeat;
  background-size: contain;
  filter: brightness(0) invert(1);
  margin-right: 5px;
}

.additional-info-sentence {
  height: 1.5em;
  overflow: hidden;
}

#typewriter {
  border-right: 0.15em solid #fff;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 3px;
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    var(--secondary-color)
  );
  z-index: 3;
}

@media (min-width: 768px) {
  .mainContent {
    align-items: center;
    min-height: 103vh;
    max-height: 1500px;
  }

  .myInfo-img {
    width: 170px;
    height: 170px;
  }

  .myInfo-text {
    font-size: 30px;
    line-height: 1px;
  }

  .myInfo-additional {
    font-size: 17px;
    letter-spacing: 3px;
  }

  .additional-info-location {
    background-size: 15px 15px;
    padding-left: 20px;
    padding-bottom: 5px;
    margin-top: 7px;
  }

  #typewriter {
    letter-spacing: 5px;
  }
}
</style>
