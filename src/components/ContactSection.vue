<template>
  <div id="contacts" class="contact-section">
    <h1 ref="titleRef">Contact Me</h1>
    <div class="contact-cards">
      <div ref="emailRef" class="card email" @click="openEmail">
        <div class="logo-container logo-mail">
          <img alt="Github Logo" src="../assets/mail-mark-white.svg" />
        </div>
        <h2>Email</h2>
        <p>chinhongtan1@gmail.com</p>
      </div>
      <div ref="githubRef" class="card github" @click="openGithub">
        <div class="logo-container logo-github">
          <img alt="Github Logo" src="../assets/github-mark-white.svg" />
        </div>
        <h2>GitHub</h2>
        <p>github.com/chinhongtan</p>
      </div>
      <div ref="discordRef" class="card discord" @click="openDiscord">
        <div class="logo-container logo-discord">
          <img alt="Discord Logo" src="../assets/discord-mark-white.svg" />
        </div>
        <div :class="{ 'fade-out': showNotification }" class="card-content">
          <h2>Discord</h2>
          <p>chino_kafuu.</p>
        </div>
        <div
          :class="{ 'fade-in': showNotification }"
          class="notification-message"
        >
          Username copied!
        </div>
      </div>
      <div ref="telegramRef" class="card telegram" @click="openTelegram">
        <div class="logo-container logo-telegram">
          <img alt="Github Logo" src="../assets/telegram-mark-blue.svg" />
        </div>
        <h2>Telegram</h2>
        <p>chinhongtan.t.me</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  padding: 2rem 1rem 6rem;
  background: linear-gradient(135deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
}

h1 {
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2.5rem;
  padding-bottom: 1rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo-container {
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 15px;
  padding: 5px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.logo-container img {
  height: 35px;
}

.card {
  background-color: var(--secondary-color);
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px;
}

.card:hover {
  opacity: 0.9;
}

.card-content,
.notification-message {
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  width: calc(100% - 4rem);
  left: 3rem;
  top: 50%;
  transform: translateY(-50%);
}

.card-content {
  opacity: 1;
}

.card-content.fade-out {
  opacity: 0;
}

.notification-message {
  font-size: 1rem;
  font-weight: 550;
  text-wrap: auto;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  opacity: 0;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.notification-message.fade-in {
  opacity: 1;
}

h2 {
  color: var(--primary-color);
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-dark);
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
}

.logo-github {
  background-color: black;
}

.logo-discord {
  background-color: #5865f2;
}

.logo-mail {
  background-color: deepskyblue;
}

.logo-telegram {
  background-color: #009eeb;
}

@media (min-width: 768px) {
  .contact-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  .logo-container {
    left: -40px;
    height: 70px;
    width: 70px;
  }

  .logo-container img {
    height: 45px;
  }

  .card {
    padding: 1.5rem 1.5rem 1.5rem 4rem;
  }

  .card-content,
  .notification-message {
    width: calc(100% - 5.5rem);
    left: 4rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .notification-message {
    font-size: 1.5rem;
    justify-content: center;
    text-align: center;
  }
}
</style>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const email = "chinhongtan1@gmail.com";
const githubProfile = "https://github.com/chinhongtan";
const discordUsername = "chino_kafuu.";
const telegramProfile = "https://t.me/chinhongtan";

const showNotification = ref(false);
const titleRef = ref(null);
const emailRef = ref(null);
const githubRef = ref(null);
const discordRef = ref(null);
const telegramRef = ref(null);

onMounted(() => {
  setupAnimations();
});

function setupAnimations() {
  // Title animation
  gsap.from(titleRef.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: titleRef.value,
      start: "top bottom-=10%",
      toggleActions: "play none none none",
    },
  });

  // Cards animation
  const cards = [
    emailRef.value,
    githubRef.value,
    discordRef.value,
    telegramRef.value,
  ];
  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
      delay: index * 0.2, // Stagger effect
    });
  });

  // Hover animations
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    });
  });
}

function openEmail() {
  window.open(`mailto:${email}`);
}

function openGithub() {
  window.open(githubProfile, "_blank");
}

async function openDiscord() {
  await navigator.clipboard.writeText(discordUsername);
  showNotification.value = true;
  gsap.to(".notification-message", { opacity: 1, duration: 0.3 });
  gsap.to(".card-content", { opacity: 0, duration: 0.3 });
  setTimeout(() => {
    showNotification.value = false;
    gsap.to(".notification-message", { opacity: 0, duration: 0.3 });
    gsap.to(".card-content", { opacity: 1, duration: 0.3 });
  }, 1000);
}

function openTelegram() {
  window.open(telegramProfile, "_blank");
}
</script>
