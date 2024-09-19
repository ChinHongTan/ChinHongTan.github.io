<template>
  <div class="mainContent">
    <div class="myInfo">
      <div class="myInfo-img">
        <div class="rotating-border"></div>
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

<script>
export default {
  data() {
    return {
      sentences: [
        "Jeez, lolis are the best!",
        "Chino is the best girl in the world!!",
        "I am NOT Chinono Intellegence!!!",
        "Please, I am a boy!",
      ],
      currentSentence: 0,
      currentChar: 0,
      isDeleting: false,
      typewriterElement: null,
    };
  },
  mounted() {
    this.typewriterElement = document.getElementById("typewriter");
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      const currentText = this.sentences[this.currentSentence];

      if (this.isDeleting) {
        this.typewriterElement.textContent = currentText.substring(
          0,
          this.currentChar - 1
        );
        this.currentChar--;
      } else {
        this.typewriterElement.textContent = currentText.substring(
          0,
          this.currentChar + 1
        );
        this.currentChar++;
      }

      let typingSpeed = 100;

      if (this.isDeleting) {
        typingSpeed /= 2;
      }

      if (!this.isDeleting && this.currentChar === currentText.length) {
        typingSpeed = 2000; // Pause at the end
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentChar === 0) {
        this.isDeleting = false;
        this.currentSentence =
          (this.currentSentence + 1) % this.sentences.length;
        typingSpeed = 500; // Pause before starting new sentence
      }

      setTimeout(() => this.typeWriter(), typingSpeed);
    },
  },
};
</script>

<style>
.mainContent {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 55px;
  min-height: 103vh;
  max-height: 1500px;
  background-position: bottom, center;
  background-repeat: no-repeat;
  background-size: auto, cover;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.55) 35%,
      rgba(0, 0, 0, 0) 65%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("../assets/81274446_p0.jpg");
}

.myInfo {
  margin-bottom: 7%;
  color: #fff;
  text-align: center;
}

.myInfo-img {
  width: 170px;
  height: 170px;
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
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 30px;
  line-height: 1px;
  transition: all 0.3s ease;
}

.myInfo-text:hover {
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: pulse 2s infinite;
}

.myInfo-additional {
  letter-spacing: 3px;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 17px;
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

.rotating-border {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
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
  background-size: 300% 300%;
  animation: gradientRotate 4s linear infinite;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
  will-change: transform;
}

@keyframes gradientRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.myInfo-img:hover .rotating-border {
  opacity: 1;
  filter: blur(10px);
}

.additional-info-location {
  background-image: url("../assets/location.svg");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  filter: brightness(0) invert(1);
  padding-left: 20px;
  padding-bottom: 5px;
  align-self: center;
  margin-top: 7px;
  display: inline-block;
}

.additional-info-sentence {
  height: 1.5em;
  overflow: hidden;
}

#typewriter {
  border-right: 0.15em solid #fff; /* Cursor effect */
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 5px;
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
  z-index: 2;
}
</style>
