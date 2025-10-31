<template>
  <div>
    <transition name="fade">
      <div v-if="isOpen" class="overlay" @click="closeMenu"></div>
    </transition>
    <transition name="slide-up">
      <div v-if="isOpen" class="mobile-menu">
        <div class="menu-title">Menu</div>
        <ul>
          <li
            v-for="section in sections"
            :key="section"
            :class="{ active: activeSection === section }"
            @click="selectSection(section)"
          >
            <a :href="`#${section}`">
              <img
                :alt="section"
                :src="getIconPath(section)"
                class="menu-icon"
              />
              <span class="navText">{{ section }}</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  sections: {
    type: Array,
    required: true,
    validator: (value) => value.every((item) => typeof item === "string"),
  },
  activeSection: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close", "selectSection"]);

const closeMenu = () => {
  emit("close");
};

const selectSection = (section) => {
  emit("selectSection", section);
};

// Memoize icon paths for better performance
const iconMap = {
  home: "home.svg",
  about: "person.svg",
  projects: "code.svg",
  friends: "group.svg",
  contacts: "mail.svg",
};

const getIconPath = (section) => {
  return new URL(`../assets/${iconMap[section]}`, import.meta.url).href;
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
}

.mobile-menu {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  font-family: "Roboto", sans-serif;
}

.menu-title {
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  position: relative;
  padding: 0;
  margin: 0;
}

.mobile-menu li a {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.mobile-menu li:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 60px;
  right: 20px;
  bottom: 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}

.mobile-menu li.active a {
  color: #007aff;
  font-weight: 600;
}

.mobile-menu li a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.menu-icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
  filter: invert(20%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(96%)
    contrast(94%);
}

.mobile-menu li.active .menu-icon {
  filter: invert(40%) sepia(77%) saturate(1654%) hue-rotate(191deg)
    brightness(101%) contrast(101%);
}

.mobile-menu .navText {
  display: inline-block;
  text-align: left;
  text-transform: capitalize;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
