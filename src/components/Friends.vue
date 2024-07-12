<template>
  <div class="friends">
    <div class="friends-intro">
      <h1>Friends</h1>

      <p>
        This are some of my best friends who gave me a lot of support. Without
        them, I won’t be able to learn and enjoy coding so much. I truely
        appreaciate them.
      </p>
    </div>
    <div class="friends-content">
      <div class="naozumi">
        <div class="naozumi-img">
          <img
            src="https://cdn.discordapp.com/avatars/661778480756949052/a01caee60a19d2f0bc1c0880dbf11530.png?size=2048"
            alt="Naozumi's avatar"
          />
        </div>
        <div class="naozumi-content">
          <h2>NaozumiOuO #8298</h2>

          <p>
            My very good friend from Hong Kong who shared a lot of exciting
            knowledge with me.
          </p>
        </div>
      </div>

      <div class="tommy">
        <div class="tommy-content">
          <h2>tommy2131 #3750</h2>

          <p>Accompany me during my learning journey in coding.</p>
          <p>Always excited about math and coding problems.</p>
        </div>
        <div class="tommy-img">
          <img
            src="https://cdn.discordapp.com/avatars/482413104286924820/812b9aafd7aba95493fcfc657ea14856.png?size=2048"
            alt="Tommy's avatar"
          />
        </div>
      </div>

      <div class="mini-apple">
        <div class="mini-apple-img">
          <img
            src="https://cdn.discordapp.com/avatars/577883145056157707/a1aa4f240660b7d88f28cc2b46216bb8.png?size=2048"
            alt="Mini Apple's avatar"
          />
        </div>
        <div class="mini-apple-content">
          <h2>MiniApple #3344</h2>

          <p>Teaches me a lot about various languages and their differences.</p>
          <p>Has a wide knowledge of various languages</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.friends {
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-family: "Cantora One", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-left: 15%;
  padding-right: 15%;
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
}

.friends-content p {
  margin: auto;
}

.naozumi {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.naozumi-img {
  margin-right: 5%;
}

.tommy {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
}

.tommy-img {
  margin-left: 5%;
}

.mini-apple {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.mini-apple-img {
  margin-right: 5%;
}
</style>
