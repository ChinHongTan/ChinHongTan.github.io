<template>
  <div class="topNav">
    <div class="navLeft">
      <div class="pfp">
        <img alt="logo" src="../assets/avatar_small.jpeg" />
      </div>
      <div class="left-text">
        <div class="name">
          <span>Chinono</span>
        </div>
      </div>
    </div>
    <ul ref="navRightRef" class="navRight">
      <li
        v-for="section in sections"
        :key="section"
        :ref="
          (el) => {
            if (el) navItemRefs[section] = el;
          }
        "
        :class="{ active: activeSection === section }"
        @click="updateSliderPosition"
      >
        <a :href="`#${section}`"
          ><span class="navText">{{ section }}</span></a
        >
      </li>
      <div :style="sliderStyle" class="slider"></div>
    </ul>
  </div>
</template>

<script>
import { nextTick, onMounted, onUnmounted, reactive, ref, watch } from "vue";

export default {
  setup() {
    const sections = ["home", "about", "projects", "friends", "contacts"];
    const activeSection = ref("home");
    const prevSection = ref("home");
    const observers = [];
    const navRightRef = ref(null);
    const navItemRefs = reactive({});

    const sliderStyle = ref({
      transform: "translateX(0px) skew(-20deg)",
      width: "0px",
      transition: "all 0.3s ease",
    });

    const updateSliderPosition = () => {
      console.log("Updating slider position for section:", activeSection.value);
      nextTick(() => {
        if (navItemRefs[activeSection.value]) {
          const activeItem = navItemRefs[activeSection.value];
          const leftOffset = activeItem.offsetLeft;
          const width = activeItem.offsetWidth;

          sliderStyle.value = {
            transform: `translateX(${leftOffset}px) skew(-20deg)`,
            width: `${width}px`,
            transition: "all 0.3s ease",
          };
        }
      });
    };

    const observeSection = (sectionId) => {
      const section = document.querySelector(`#${sectionId}`);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const center =
                entry.boundingClientRect.top +
                entry.boundingClientRect.height / 2;
              const viewportCenter = window.innerHeight / 2;

              if (
                Math.abs(center - viewportCenter) <
                entry.boundingClientRect.height / 2
              ) {
                prevSection.value = activeSection.value;
                activeSection.value = sectionId;
                updateSliderPosition();
              }
            }
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      observer.observe(section);
      observers.push(observer);
    };

    const forceUpdateRefs = () => {
      nextTick(() => {
        sections.forEach((section) => {
          if (navItemRefs[section]) {
            navItemRefs[section] = { ...navItemRefs[section] };
          }
        });
        updateSliderPosition();
      });
    };

    onMounted(() => {
      sections.forEach(observeSection);
      nextTick(() => {
        forceUpdateRefs();
      });
    });

    // Watch for changes in activeSection
    watch(activeSection, (newSection, oldSection) => {
      console.log(`Active section changed from ${oldSection} to ${newSection}`);
      nextTick(() => {
        updateSliderPosition();
      });
    });

    onUnmounted(() => {
      observers.forEach((observer) => observer.disconnect());
    });

    return {
      sections,
      activeSection,
      sliderStyle,
      navRightRef,
      navItemRefs,
      updateSliderPosition,
    };
  },
};
</script>

<style>
.topNav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--secondary-color-80-transparent);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 15px 30px 10px rgba(0, 0, 0, 0.5);
  height: 55px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
}

.navRight {
  list-style-type: none;
  margin: 0;
  padding: 0 10px 0 0;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.navRight > li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skew(-20deg);
  height: 100%;
  transition: color 0.3s ease;
  flex: 1;
  z-index: 1;
  background: transparent;
}

.navRight > li:last-child {
  padding-right: 20px;
}

.navRight > li:first-child {
  margin-left: 20px;
}

.navRight > li.active {
  background: transparent;
}

.navRight > li.active .navText {
  color: #ffffff;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(45deg, #f857a8, #ff5858);
  z-index: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  transform-origin: left center;
}

.navRight > li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}

.navRight > li.active {
  background: none;
}

.navLeft {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(45deg, #f857a8, #ff5858);
  transform: skew(-20deg);
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  right: 10px;
}

.left-text {
  flex-direction: column;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 10px;
}

.pfp img {
  transform: skew(20deg);
  border-radius: 50%;
  width: 40px;
}

.name {
  font-size: 30px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 650;
  transform: skew(20deg);
  text-indent: -20px;
  padding-left: 20px;
}

.navText {
  display: inline-block;
  color: #f857a8;
  transform: skew(20deg);
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
  font-family: "Saira Semi Condensed", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

li:hover:not(.active) {
  background: rgba(0, 0, 0, 0.1);
}
</style>
