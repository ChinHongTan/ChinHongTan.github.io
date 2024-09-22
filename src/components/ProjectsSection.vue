<template>
  <div id="projects" class="projects">
    <div class="content-wrapper">
      <div ref="introRef" class="intro-container">
        <h1>Code Adventures!</h1>
        <p class="projects-intro">
          These are some of my projects published on GitHub. Any suggestions and
          contributions to any of them are welcomed. I really appreciate it if
          you are willing to star them, or follow my GitHub.
        </p>
      </div>
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        Loading projects...
      </div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else ref="projectCardsContainer" class="project-cards">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.name"
          :index="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  setup() {
    const projects = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const introRef = ref(null);
    const projectCardsContainer = ref(null);

    const repositories = [
      "ChinHongTan/ChinoKafuu",
      "ChinHongTan/AgefansCrawler",
      "Shewiiii/Ugoku-v2",
      "ChinHongTan/Tetris-game-Vue",
      "ChinHongTan/Ugoku-frontend",
      "Naozumi520/Remedy",
    ];

    onMounted(() => {
      fetchProjects();
    });

    async function fetchProjects() {
      loading.value = true;
      error.value = null;
      try {
        const projectPromises = repositories.map((repo) =>
          fetch(`https://api.github.com/repos/${repo}`).then((res) =>
            res.json()
          )
        );
        const projectsData = await Promise.all(projectPromises);

        projects.value = await Promise.all(
          projectsData.map(async (data) => {
            const contributorsResponse = await fetch(
              `https://api.github.com/repos/${data.owner.login}/${data.name}/contributors`
            );
            const contributors = await contributorsResponse.json();

            return {
              name: data.name,
              description: data.description,
              language: data.language,
              stars: data.stargazers_count,
              forks: data.forks_count,
              issues: data.open_issues_count,
              contributors: contributors.length,
              author: data.owner.login,
              authorAvatar: data.owner.avatar_url,
              repoUrl: data.html_url,
            };
          })
        );

        nextTick(() => setupAnimations());
      } catch (error) {
        console.error("Error fetching project data:", error);
        error.value = "Failed to load projects. Please try again later.";
      } finally {
        loading.value = false;
      }
    }

    function setupAnimations() {
      // Animate intro container
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
    }

    return {
      projects,
      loading,
      error,
      introRef,
      projectCardsContainer,
      fetchProjects,
      setupAnimations,
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 40px 20px;
  background: linear-gradient(135deg, #fff0f5 0%, #f6deff 50%, #bdc9fc 100%);
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.intro-container {
  background: var(--lighter-pink);
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.projects-intro {
  text-align: center;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  margin: 0 auto 40px;
  max-width: 800px;
  color: #555;
  font-size: 1.1em;
  line-height: 1.6;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
}

.loading,
.error {
  text-align: center;
  font-size: 1.2em;
  color: #555;
  margin: 40px 0;
}

.error {
  color: #d32f2f;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
