<template>
  <div class="topNav">
    <div class="navLeft">
      <div class="pfp">
        <img src="../assets/avatar_small.jpeg" alt="logo" />
      </div>
      <div class="left-text">
        <div class="name">
          <span>Chinono</span>
        </div>
      </div>
    </div>
    <ul class="navRight">
      <li class="active">
        <a href="#home"><span class="navText active">Home</span></a>
      </li>
      <li class="navAbout">
        <a href="#about"><span class="navText">About</span></a>
      </li>
      <li class="navProjects">
        <a href="#Projects"><span class="navText">Projects</span></a>
      </li>
      <li class="navGithub">
        <a href="#github"><span class="navText">Github</span></a>
      </li>
    </ul>
  </div>
</template>

<style>
.topNav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 15px 30px 10px rgba(0, 0, 0, 0.5);
  height: 55px;
}

.navRight {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

.navRight > li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skew(-20deg);
  height: 100%;
  left: 20px;
}

.navRight > li:last-child {
  padding-right: 20px;
}

.navRight > li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}

.navLeft {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(45deg, #f857a8, #ff5858);
  transform: skew(-20deg);
  padding-left: 30px;
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
}

.active {
  background: linear-gradient(45deg, #f857a8, #ff5858);
  color: #ffffff;
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
  background: #e7e7e7;
}
</style>
