<template>
  <div class="contact-section">
    <h1>Contact Me</h1>
    <div class="contact-cards">
      <div class="card email" @click="openEmail">
        <div class="logo-container logo-mail">
          <img src="../assets/mail-mark-white.svg" alt="Github Logo" />
        </div>
        <h2>Email</h2>
        <p>chinhongtan1@gmail.com</p>
      </div>
      <div class="card github" @click="openGithub">
        <div class="logo-container logo-github">
          <img src="../assets/github-mark-white.svg" alt="Github Logo" />
        </div>
        <h2>GitHub</h2>
        <p>github.com/chinhongtan</p>
      </div>
      <div class="card discord" @click="openDiscord">
        <div class="logo-container logo-discord">
          <img src="../assets/discord-mark-white.svg" alt="Discord Logo" />
        </div>
        <div class="card-content" :class="{ 'fade-out': showNotification }">
          <h2>Discord</h2>
          <p>.chinokafuu</p>
        </div>
        <div
          class="notification-message"
          :class="{ 'fade-in': showNotification }"
        >
          Username copied!
        </div>
      </div>
      <div class="card telegram" @click="openTelegram">
        <div class="logo-container logo-telegram">
          <img src="../assets/telegram-mark-blue.svg" alt="Github Logo" />
        </div>
        <h2>Telegram</h2>
        <p>chinhongtan.t.me</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  padding: 2rem;
  background: linear-gradient(135deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
}

h1 {
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 55px;
  padding-bottom: 20px;
}

.contact-cards {
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  column-gap: 4rem;
  max-width: 800px;
  margin: 0 auto;
}

.logo-container {
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
  padding: 5px;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.logo-container img {
  height: 45px;
}

.card {
  background-color: var(--secondary-color);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}

.card-content,
.notification-message {
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.notification-message {
  top: 0;
  left: 20px;
  font-size: 30px;
  font-weight: 550;
  text-wrap: auto;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
}

.card-content {
  opacity: 1;
}

.card-content.fade-out {
  opacity: 0;
}

.notification-message {
  opacity: 0;
  color: var(--primary-color);
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.notification-message.fade-in {
  opacity: 1;
}

.email {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.github {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.discord {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.telegram {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

h2 {
  color: var(--primary-color);
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  padding-left: 60px;
}

p {
  color: var(--text-dark);
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  padding-left: 60px;
}

.logo-container {
  z-index: 2;
}
</style>

<script setup>
import { ref } from "vue";

const email = "chinhongtan1@gmail.com";
const githubProfile = "https://github.com/chinhongtan";
const discordUsername = "chino_kafuu.";
const telegramProfile = "https://t.me/chinhongtan";

const showNotification = ref(false);

function openEmail() {
  window.open(`mailto:${email}`);
}

function openGithub() {
  window.open(githubProfile, "_blank");
}

async function openDiscord() {
  await navigator.clipboard.writeText(discordUsername);
  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 1000);
}

function openTelegram() {
  window.open(telegramProfile, "_blank");
}
</script>
