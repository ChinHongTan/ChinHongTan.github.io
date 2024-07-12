<template>
    <div class="topNav">
        <div class="left">
            <div class="pfp">
                <img
                    src="../assets/avatar_small.jpeg"
                    alt="logo"
                />
            </div>
            <div class="left-text">
                <div class="name">
                    <span>Chinono</span>
                </div>
                <div class="motto">
                    <p>Jeez, lolis are the best!</p>
                </div>
            </div>
        </div>
        <ul>
            <li class="active">
                <a href="#home"><span class="navText active">Home</span></a>
            </li>
            <li>
                <a href="#about"><span class="navText">About</span></a>
            </li>
            <li>
                <a href="#Projects"><span class="navText">Projects</span></a>
            </li>
            <li>
                <a style="padding-right: 45px" href="#github"
                    ><span class="navText">Github</span></a
                >
            </li>
        </ul>
    </div>
</template>

<style>
.topNav {
    background-color: #fff;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 15px 30px 10px rgba(0, 0, 0, 0.5);
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    position: relative;
    display: inline-block;
    transform: skew(-20deg);
    left: 1em;
}

li a {
    display: block;
    padding: 28.5px 20px;
}

.left {
    display: flex;
    align-items: center;
    background: linear-gradient(45deg, #f857a8, #ff5858);
    transform: skew(-20deg);
    padding-left: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;
    right: 20px;
}

.left-text {
    flex-direction: column;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 10px;
    padding-top: 15px;
}

.pfp img {
    transform: skew(20deg);
    border-radius: 50%;
    width: 50px;
}

.name {
    font-size: 30px;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 650;
    transform: skew(20deg);
    text-indent: -20px;
}

.motto {
    transform: skew(20deg);
    font-size: 15px;
    color: #fff;
    font-family: "Roboto", sans-serif;
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
