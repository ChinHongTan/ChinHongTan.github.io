<template>
  <div id="about" ref="aboutRef" class="about">
    <div class="about-card">
      <div class="about-image">
        <div class="about-image-container">
          <img alt="" src="../assets/avatar_big.jpg" />
          <div ref="rotatingBorderRef" class="rotating-border-about"></div>
        </div>
        <p>About Me</p>
      </div>
      <div class="about-content">
        <h1>Moshi moshi, Chinono desu!</h1>
        <p>
          A 20-year-old university student from Malaysia, and a huge fan of
          Chino Kafuu! Currently studying Medicine at Universiti of Malaya (UM),
          but I promise, my heart belongs to cute anime and tech!
        </p>
        <h2>Quick Facts:</h2>
        <ul>
          <li>
            Languages: English, Malay, Chinese, Japanese (still learning, but
            we'll get there!)
          </li>
          <li>
            Hobbies: Watching anime (especially anything with adorable
            characters!), playing games, coding small projects, playing piano
            and vibing to music.
          </li>
        </ul>
        <h2>Favourites:</h2>
        <ul>
          <li>
            Anime: Gochuumon wa Usagi Desu ka? (Super chill, wholesome and cute
            anime!)
          </li>
          <li>
            Character: Chino Kafuu (because, who doesn't love her cuteness?!)
          </li>
          <li>
            Game: Genshin Impact (My fav character? Definitely Klee for her
            cuteness overload!)
          </li>
          <li>Music: J-Pop, Lo-Fi (the perfect study vibe)</li>
        </ul>
        <h2>Education:</h2>
        <ul>
          <li>University: Universiti of Malaya (UM)</li>
          <li>Course: Bachelor of Medicine, Bachelor of Surgery (MBBS)</li>
        </ul>
        <p>
          I'm a kawaii enthusiast with a passion for learning new things!
          Currently, I'm on a journey of learning Japanese, so that someday, I
          can visit Japan.
        </p>
        <p>
          When I'm not studying medicine, you can find me coding for fun,
          solving math problems, or diving into science documentaries. I believe
          in the power of friendship and am super grateful to my awesome group
          of friends who are always down for learning adventures together!
        </p>
        <p class="fun-fact">
          P.S. Just in case you were wondering, I'm a boy! But hey, boys can
          love cute things too, right?
        </p>
      </div>
      <div class="about-overlay"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutRef = ref(null);
const rotatingBorderRef = ref(null);

onMounted(() => {
  setupAnimations();
  animateRotatingBorder();
});

function setupAnimations() {
  // Image container animation
  gsap.from(".about-image-container", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-image-container",
      start: "top bottom-=10%",
      toggleActions: "play none none none",
    },
  });

  // "About Me" text animation
  gsap.from(".about-image p", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-image p",
      start: "top bottom-=10%",
      toggleActions: "play none none none",
    },
  });

  // Content animations
  gsap.utils.toArray(".about-content > *").forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
      delay: index * 0.1, // Stagger effect
    });
  });
}

function animateRotatingBorder() {
  gsap.to(rotatingBorderRef.value, {
    backgroundPosition: "1000% 50%",
    duration: 30,
    ease: "none",
    repeat: -1,
    scrollTrigger: {
      trigger: ".about-image-container",
      start: "top bottom-=10%",
      toggleActions: "play pause resume pause",
    },
  });
}
</script>

<style scoped>
.about {
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
  position: relative;
}

.about-card {
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--lighter-pink);
  padding: 2rem;
  margin: 1rem;
}

.about-content {
  flex: 1;
  font-style: normal;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
}

.about-content h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.about-content h2 {
  color: #ff69b4;
  margin-top: 1.5rem;
  font-size: 1.5rem;
}

.about-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.about-content li {
  margin-bottom: 0.5rem;
}

.about-image {
  flex-shrink: 0;
  margin-right: 2rem;
}

.about-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: visible;
}

.about-image-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
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
  background: linear-gradient(
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
  );
  background-size: 1000% 100%;
}

.about-image p {
  font-size: 2rem;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  text-align: center;
  margin: 1rem 0;
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

.fun-fact {
  background-color: #f0f8ff;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1.5rem;
  border: 2px solid #add8e6;
}

@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    padding: 1rem;
  }

  .about-image {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .about-content {
    font-size: 0.9rem;
  }

  .about-content h1 {
    font-size: 2rem;
  }

  .about-content h2 {
    font-size: 1.2rem;
  }

  .about-image-container {
    width: 150px;
    height: 150px;
  }

  .about-image p {
    font-size: 1.5rem;
  }
}
</style>
