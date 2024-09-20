<template>
  <div id="friends" class="friends">
    <div class="friends-card">
      <div class="friends-intro">
        <h1>Friends</h1>

        <p>
          This are some of my best friends who gave me a lot of support. Without
          them, I won’t be able to learn and enjoy coding so much. I truely
          appreaciate them.
        </p>
      </div>
      <div class="friends-content">
        <div class="friend-card naozumi">
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

        <div class="friend-card tommy">
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

        <div class="friend-card shewi">
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

<style>
.friends {
  background: linear-gradient(45deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.friends-card {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  border-radius: 30px;
  background-color: var(--lighter-pink);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
}

.friends-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}

.friends-intro h1 {
  font-size: 55px;
  line-height: normal;
  margin-bottom: auto;
}

.friends-content img {
  width: 125px;
  height: 125px;
  border-radius: 50%;
}

.friends-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.friends-content > div {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;
  margin: 15px;
  min-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.friends-content h2 {
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 35px;
}

.friends-content p {
  margin: auto;
}

.friend-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30px;
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

.naozumi-img {
  margin-right: 7%;
}

.tommy {
  background: linear-gradient(135deg, #fff5e6 0%, #ffffd6 100%);
}

.tommy-img {
  margin-right: 7%;
}

.shewi {
  background: linear-gradient(135deg, #f3e6ff 0%, #ffe6f0 100%);
}

.shewi-img {
  margin-right: 7%;
}
</style>
<script lang="ts" setup></script>
