<template>
    <div class="projects">
        <div class="projects-content">
            <h1>Hello World!</h1>

            <p>
                These are some of my projects published on GitHub. Any
                suggestions and contributions to any of them are welcomed. I
                really appreaciate it if you are willing to star them, or follow
                my GitHub.
            </p>

            <h2>Chino Kafuu</h2>

            <p>
                A Discord bot I made that focus more on features than having
                funs. It is my first and only one project written in JavaScript.
                I used it to learn JavaScript and about how modern websites and
                networks work. Recently I learned some TypeScript, and is now
                slowly translating the bot to TypeScript. Besides, I am also
                linking my bot to cloud database for data storage. I always try
                my best to make the code up to standard and easy to understand.
            </p>

            <h2>AgefansCrawler</h2>

            <p>
                One of my Python project. It is able to collect information and
                download animes from Agefans website. The network at my home is
                always slow and laggy. Thus, I made this web crawler to download
                animes and watch them smoothly without having to worry about
                network condition.
            </p>
        </div>
        <div class="projects-img">
            <p>Projects</p>
            <img src="../assets/github.svg" alt="Github Logo" />
        </div>
    </div>
</template>

<style>
.projects {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
}

.projects-content {
    margin-right: 2%;
    margin-left: 15%;
    font-style: normal;
    font-family: "Cantora One", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

.projects-content h1 {
    font-size: 55px;
    line-height: normal;
    margin-bottom: auto;
}

.projects-img {
    margin-left: 4%;
    margin-right: 15%;
}

.projects-img p {
    font-size: 55px;
    font-family: "Cantora One", sans-serif;
    font-weight: 400;
    text-align: center;

    margin: auto;
}
</style>
