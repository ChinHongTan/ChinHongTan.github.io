<template>
<div class="topNav">
    <p class="topNav-left">Chinono</p>
    <ul>
        <li><a class="active" href="#home"><span class="navText-active">Home</span></a></li>
        <li><a href="#about"><span class="navText">About</span></a></li>
        <li><a href="#Projects"><span class="navText">Projects</span></a></li>
        <li><a href="#Discord"><span class="navText">Discord</span></a></li>
        <li><a style="padding-right: 45px;" href="#github"><span class="navText">Github</span></a></li>
    </ul>
</div>
</template>

<style>
.topNav {
    background-color: #1e1e1e;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    box-shadow: 0px 15px 30px 10px rgba(0,0,0,0.5);
}

ul {
    list-style-type: none;
}

li {
    position: relative;
    display: inline-block;
    transform: skew(-20deg);
    left: 1em;
}

.topNav-left {
    margin: 0 25px;
    font-size: 30px;
    color: #f857a8;
    font-family: 'Roboto', sans-serif;
    font-weight: 650;
}

a {
    text-transform: uppercase;
    text-align: center;
    font-size: 15px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 700;
    padding: 18px 20px;
}

.active {
    background: linear-gradient(45deg, #f857a8, #ff5858);
}

.navText {
    display: inline-block;
    color: #f857a8;
    transform: skew(20deg);
}

.navText-active {
    display: inline-block;
    color: #ffffff;
    transform: skew(20deg);
}

a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; }


a:active { text-decoration: none; }

li a:hover:not(.active) {
    background: #e7e7e7;
}

</style>