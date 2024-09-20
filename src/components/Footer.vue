<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-profile">
          <img
            alt="Chinono"
            class="footer-avatar"
            src="../assets/avatar_small.jpeg"
          />
          <h3>Chinono</h3>
        </div>
        <p class="tagline">Where Code Meets Kawaii</p>
        <div class="social-links">
          <a
            href="https://github.com/chinhongtan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="GitHub"
              class="social-icon"
              src="../assets/github-mark-white.svg"
            />
          </a>
          <a
            href="https://discord.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Discord"
              class="social-icon"
              src="../assets/discord-mark-white.svg"
            />
          </a>
          <a
            href="https://t.me/chinhongtan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Telegram"
              class="social-icon"
              src="../assets/telegram-mark-blue.svg"
            />
          </a>
          <a href="mailto:chinhongtan1@gmail.com">
            <img
              alt="Email"
              class="social-icon"
              src="../assets/mail-mark-white.svg"
            />
          </a>
        </div>
      </div>
      <div class="footer-middle">
        <h3>Quick Links</h3>
        <nav class="quick-links">
          <a class="quick-link" href="#home">
            <img :src="homeIcon" alt="Home" class="quick-link-icon" />
            <span>Home</span>
          </a>
          <a class="quick-link" href="#about">
            <img :src="personIcon" alt="About" class="quick-link-icon" />
            <span>About</span>
          </a>
          <a class="quick-link" href="#projects">
            <img :src="codeIcon" alt="Projects" class="quick-link-icon" />
            <span>Projects</span>
          </a>
          <a class="quick-link" href="#friends">
            <img :src="groupIcon" alt="Friends" class="quick-link-icon" />
            <span>Friends</span>
          </a>
          <a class="quick-link" href="#contacts">
            <img :src="emailIcon" alt="Contact" class="quick-link-icon" />
            <span>Contact</span>
          </a>
        </nav>
      </div>
      <div class="footer-right">
        <p>
          © {{ new Date().getFullYear() }} Chin Hong Tan. All rights reserved.
        </p>
        <p>Made with ❤️ by Chinono</p>
        <div class="credits">
          <h4>Image Credits:</h4>
          <p>
            Avatar by
            <a
              href="https://www.pixiv.net/en/users/4292709"
              rel="noopener noreferrer"
              target="_blank"
              >もくず</a
            >
          </p>
          <p>
            Home background by
            <a
              href="https://www.pixiv.net/en/users/523251"
              rel="noopener noreferrer"
              target="_blank"
              >Mocha</a
            >
          </p>
        </div>
        <p class="license">
          This website is released under the
          <a
            href="https://opensource.org/licenses/MIT"
            rel="noopener noreferrer"
            target="_blank"
            >MIT License</a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import homeIcon from "../assets/home.svg";
import personIcon from "../assets/person.svg";
import codeIcon from "../assets/code.svg";
import groupIcon from "../assets/group.svg";
import emailIcon from "../assets/mail.svg";
</script>

<style scoped>
.site-footer {
  background: linear-gradient(to right, var(--primary-color), #ffa8e0);
  color: var(--text-light);
  padding: 3rem 0;
  font-family: "Cantora One", sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 2rem;
}

.footer-left,
.footer-middle,
.footer-right {
  flex: 1;
}

.footer-profile {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-profile h3 {
  margin: 0 0 0 10px;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
}

.footer-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid var(--text-light);
}

.tagline {
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 28px;
  height: 28px;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.footer-middle h3,
.footer-right h3 {
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-middle ul {
  list-style-type: none;
  padding: 0;
}

.footer-middle ul li {
  margin-bottom: 0.5rem;
}

.footer-middle ul li a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.footer-middle ul li a:hover {
  color: var(--accent-color);
}

.credits {
  margin-top: 1.5rem;
  font-size: 0.8rem;
}

.credits h4 {
  font-family: "Poppins", sans-serif;
  margin-bottom: 0.5rem;
}

.license {
  margin-top: 1.5rem;
  font-size: 0.8rem;
}

.license a,
.credits a {
  color: var(--text-light);
  text-decoration: underline;
  transition: color 0.2s ease-in-out;
}

.license a:hover,
.credits a:hover {
  color: var(--accent-color);
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.quick-link {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-light);
  text-decoration: none;
  transition: all 0.3s ease;
}

.quick-link-icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
}

.quick-link:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.quick-link i {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.quick-link span {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-profile {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .quick-links {
    grid-template-columns: 1fr;
  }
}
</style>
