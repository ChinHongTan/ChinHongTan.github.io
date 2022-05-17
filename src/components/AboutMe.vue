<template>
<div class="mainContent">
    <div class="myInfo">
        <div class="myInfo-img">
            <img src="https://cdn.discordapp.com/avatars/947796554499100702/656cf05e9ea378da0a9b728aa21a69ed.webp?size=128" alt="">
        </div>
        <div class="myInfo-text">
            <h1>Chinono</h1>
        </div>
        <div class="myInfo-additional">
            <div class="additional-info-sentence"><span>蘿莉愛好者</span></div>
            <div class="additional-info-location"><span>Malaysia</span></div>
        </div>  
    </div>
</div>
</template>

<style>
.mainContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: 600px;
    max-height: 800px;
    background-position: bottom, center;
    background-repeat: no-repeat;
    background-size: auto, cover;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)), url('../assets/81274446_p0.jpg');
}

.myInfo {
    margin-bottom: 5%;
    color: #fff;
    text-align: center;
}

.myInfo-img {
    width: 130px;
    height: 130px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.myInfo-img img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.myInfo-text {
    letter-spacing: 2px;
    font-family: open sans, helvetica neue ,Helvetica, Arial, sans-serif;
    font-size: 25px;
    line-height: 1px;
}

.myInfo-additional {
    letter-spacing: 3px;
    font-family: open sans, helvetica neue ,Helvetica, Arial, sans-serif;
    font-size: 15px;
    display: flex;
    flex-direction: column;
}

.additional-info-location {
    background-image: url('../assets/location.svg');
    background-repeat: no-repeat;
    background-size: 15px 15px;
    filter: brightness(0) invert(1);
    padding-left: 20px;
    padding-bottom: 5px;
    align-self: center;
    margin-top: 7px;
    display: inline-block;
}

</style>