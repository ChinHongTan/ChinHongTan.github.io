<template>
  <div id="friends" class="friends">
    <div class="friends-card">
      <div ref="introRef" class="friends-intro">
        <h1>Friends</h1>

        <p>
          These are some of my best friends who gave me a lot of support.
          Without them, I won't be able to learn and enjoy coding so much. I
          truly appreciate them.
        </p>
      </div>
      <div class="friends-content">
        <div ref="naozumiRef" class="friend-card naozumi">
          <div class="naozumi-img">
            <img alt="Naozumi's avatar" src="../assets/naozumi_avatar.jpeg" />
          </div>
          <div class="naozumi-content">
            <h2>Naozumi</h2>

            <p>
              My very very very good friend from Hong Kong who helped me sooo
              much in programming and AI. He is always willing to help, and he
              is always there when I'm down, giving me support. I am very
              grateful to have him as my friend.
            </p>
          </div>
        </div>

        <div ref="tommyRef" class="friend-card tommy">
          <div class="tommy-img">
            <img alt="Tommy's avatar" src="../assets/tommy_avatar.jpeg" />
          </div>
          <div class="tommy-content">
            <h2>Tommy</h2>
            <p>My friend from Taiwan!</p>
            <p>
              Accompanied me during my learning journey in coding. He will not
              just dump a lot of programming knowledge on me, but discuss with
              me, helped me and made sure that I understood fully. He is a truly
              amazing teacher.
            </p>
            <p>
              Math and programming PRO. Ask him just about any math problem, and
              worry not, he will happily find all the answers. He might has the
              best math skills among all my friends.
            </p>
          </div>
        </div>

        <div ref="shewiRef" class="friend-card shewi">
          <div class="shewi-img">
            <img alt="Mini Apple's avatar" src="../assets/shewi_avatar.jpeg" />
          </div>
          <div class="mini-apple-content">
            <h2>Shewi</h2>

            <p>
              My friend from French, Suky chan~! He knows a lot about IEMs, and
              I mean <b>A LOT</b>. Got any questions? IEM recommendation? EQ?
              Audio equipment? Just ask Shewi. He is like a literal encyclopedia
              when it comes to audio equipments, a true master audiophile. He is
              the one who introduced me down the rabbit hole of IEMs. And he is
              cute! Suky chan is very cute!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const introRef = ref(null);
const naozumiRef = ref(null);
const tommyRef = ref(null);
const shewiRef = ref(null);

onMounted(() => {
  setupAnimations();
});

function setupAnimations() {
  // Animate intro
  gsap.from(introRef.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: introRef.value,
      start: "top bottom-=10%",
      toggleActions: "play none none none",
    },
  });

  // Animate friend cards
  const friendCards = [naozumiRef.value, tommyRef.value, shewiRef.value];
  friendCards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Alternate left and right
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
      delay: index * 0.2, // Stagger effect
    });
  });
}
</script>

<style scoped>
.friends {
  background: linear-gradient(45deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
}

.friends-card {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 30px;
  background-color: var(--lighter-pink);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
}

.friends-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  text-align: center;
}

.friends-intro h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.friends-content img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid;
}

.friends-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
}

.friend-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.friends-content h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-align: center;
}

.friends-content p {
  margin: 0.5rem 0;
}

.friend-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 10px;
}

.naozumi::before {
  background-color: #7e94fb; /* Light blue for Naozumi */
}

.tommy::before {
  background-color: #ff9d20; /* Light orange for Tommy */
}

.shewi::before {
  background-color: #9771ff; /* Light lavender for Shewi */
}

.naozumi {
  background: linear-gradient(135deg, #e6f0ff 0%, #f0e6ff 100%);
}

.tommy {
  background: linear-gradient(135deg, #fff5e6 0%, #ffffd6 100%);
}

.shewi {
  background: linear-gradient(135deg, #f3e6ff 0%, #ffe6f0 100%);
}

.naozumi-img,
.tommy-img,
.shewi-img {
  margin-bottom: 1rem;
}

.naozumi-img img {
  border-color: #7e94fb;
}

.tommy-img img {
  border-color: #ff9d20;
}

.shewi-img img {
  border-color: #9771ff;
}

@media (min-width: 768px) {
  .friend-card {
    flex-direction: row;
    text-align: left;
    padding: 2rem;
  }

  .friends-content img {
    width: 125px;
    height: 125px;
  }

  .naozumi-img,
  .tommy-img,
  .shewi-img {
    margin-right: 5%;
    margin-left: 5%;
    margin-bottom: 0;
  }

  .friends-content h2 {
    text-align: left;
  }

  .friend-card::before {
    width: 30px;
  }
}
</style>
