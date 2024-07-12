<template>
    <div class="friends">
        <div class="friends-intro">
            <h1>Friends</h1>

            <p>
                This are some of my best friends who gave me a lot of support.
                Without them, I won’t be able to learn and enjoy coding so much.
                I truely appreaciate them.
            </p>
        </div>
        <div class="friends-content">
            <div class="naozumi">
                <div class="naozumi-img">
                    <img
                        src="../assets/naozumi_avatar.jpeg"
                        alt="Naozumi's avatar"
                    />
                </div>
                <div class="naozumi-content">
                    <h2>Naozumi</h2>

                    <p>
                        My very very very good friend from Hong Kong who helped
                        me sooo much in programming and AI. He is always willing
                        to help, and he is always there when I'm down, giving me
                        support. I am very grateful to have him as my friend.
                    </p>
                </div>
            </div>

            <div class="tommy">
                <div class="tommy-img">
                    <img
                        src="../assets/tommy_avatar.jpeg"
                        alt="Tommy's avatar"
                    />
                </div>
                <div class="tommy-content">
                    <h2>Tommy</h2>
                    <p>My friend from Taiwan!</p>
                    <p>
                        Accompanied me during my learning journey in coding. He
                        will not just dump a lot of programming knowledge on me,
                        but discuss with me, helped me and made sure that I
                        understood fully. He is a truly amazing teacher.
                    </p>
                    <p>
                        Math and programming PRO. Ask him just about any math
                        problem, and worry not, he will happily find all the
                        answers. He might has the best math skills among all my
                        friends.
                    </p>
                </div>
            </div>

            <div class="shewi">
                <div class="shewi-img">
                    <img
                        src="../assets/shewi_avatar.jpeg"
                        alt="Mini Apple's avatar"
                    />
                </div>
                <div class="mini-apple-content">
                    <h2>Shewi</h2>

                    <p>
                        My friend from French, Suky chan~! He knows a lot about
                        IEMs, and I mean <b>A LOT</b>. Got any questions? IEM
                        recommendation? EQ? Audio equipment? Just ask Shewi. He
                        is like a literal encyclopedia when it comes to audio
                        equipments, a true master audiophile. He is the one who
                        introduced me down the rabbit hole of IEMs. And he is
                        cute. Just look at his profile picture. I am not writing
                        an entire article simping on him, so yeah just accept he
                        is cute.
                    </p>
                    <p>
                        btw Shewi doesn't sleep. He stayed up all night, and
                        even has a song for this. Go have a listen!
                    </p>
                    <a
                        href="https://soundcloud.com/dankidz/shewi-need-sleep/s-q2p2idvN41K?si=d312d440f269427cbeb2e6a6d6eef60b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                        >Link here
                    </a>
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

.friends-content > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.friends-content h2 {
    margin: 10px 0;
}

.friends-content > div:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.friends-content p {
    margin: auto;
}

.naozumi {
}

.naozumi-img {
    margin-right: 5%;
}

.tommy {
}

.tommy-img {
    margin-right: 5%;
}

.shewi {
}

.shewi-img {
    margin-right: 5%;
}
</style>
<script setup lang="ts"></script>
