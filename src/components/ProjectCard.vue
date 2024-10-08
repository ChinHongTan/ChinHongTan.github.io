<!--suppress CssUnresolvedCustomProperty -->
<template>
  <div ref="cardRef" :style="cardStyle" class="project-card">
    <div :style="{ backgroundColor: languageColor }" class="accent-bar"></div>
    <div class="card-header">
      <h2>{{ project.name }}</h2>
      <div :style="{ backgroundColor: languageColor }" class="language-tag">
        {{ project.language }}
      </div>
    </div>
    <p class="description">{{ project.description }}</p>
    <div class="project-stats">
      <a
        v-for="(stat, index) in ['stars', 'forks', 'issues', 'contributors']"
        :key="index"
        :href="`${project.repoUrl}/${statUrls[stat]}`"
        :title="statTitles[stat]"
        class="stat-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div class="stat-content">
          <img :alt="statTitles[stat]" :src="statIcons[stat]" class="icon" />
          <span>{{ project[stat] }}</span>
        </div>
      </a>
    </div>
    <a
      :href="project.authorProfileUrl"
      class="project-author"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        :alt="project.author"
        :src="project.authorAvatar"
        class="author-avatar"
      />
      <span class="author-name">{{ project.author }}</span>
    </a>
    <a
      :href="project.repoUrl"
      class="repo-link"
      rel="noopener noreferrer"
      target="_blank"
      >View on GitHub</a
    >
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import ContributorsIcon from "../assets/contributors.svg";
import IssueOpenedIcon from "../assets/issue-opened.svg";
import RepoForkedIcon from "../assets/repo-forked.svg";
import StarIcon from "../assets/star.svg";

const languageColors = {
  JavaScript: { hex: "#f1e05a", rgb: "241, 224, 90" },
  Python: { hex: "#3572A5", rgb: "53, 114, 165" },
  TypeScript: { hex: "#3178c6", rgb: "49, 120, 198" },
  Java: { hex: "#b07219", rgb: "176, 114, 25" },
  Vue: { hex: "#41b883", rgb: "65, 184, 131" },
};

export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const cardRef = ref(null);

    onMounted(() => {
      gsap.from(cardRef.value, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: props.index * 0.1, // Stagger effect
        scrollTrigger: {
          trigger: cardRef.value,
          start: "top bottom-=10%",
          toggleActions: "play none none none",
        },
      });
    });

    return { cardRef };
  },
  data() {
    return {
      StarIcon,
      RepoForkedIcon,
      IssueOpenedIcon,
      ContributorsIcon,

      statIcons: {
        stars: StarIcon,
        forks: RepoForkedIcon,
        issues: IssueOpenedIcon,
        contributors: ContributorsIcon,
      },
      statUrls: {
        stars: "stargazers",
        forks: "network/members",
        issues: "issues",
        contributors: "graphs/contributors",
      },
      statTitles: {
        stars: "Stars",
        forks: "Forks",
        issues: "Issues",
        contributors: "Contributors",
      },
    };
  },
  computed: {
    languageColor() {
      return languageColors[this.project.language]?.hex || "#858585";
    },
    languageColorRGB() {
      return languageColors[this.project.language]?.rgb || "133, 133, 133";
    },
    cardStyle() {
      const isJavaScript = this.project.language === "JavaScript";
      return {
        "--lang-color": this.languageColor,
        "--lang-color-rgb": this.languageColorRGB,
        fontColour: isJavaScript ? "#333" : "#fff",
        background: "var(--lighter-pink)",
      };
    },
  },
};
</script>

<style scoped>
.project-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 300px;
}

.accent-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h2 {
  margin: 0;
  color: #333;
  font-size: 1.4em;
  font-weight: 600;
}

.language-tag {
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  color: v-bind(cardStyle.fontColour);
  font-weight: bold;
}

.description {
  color: #555;
  font-size: 0.9em;
  line-height: 1.4;
  margin-bottom: 15px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.project-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9em;
  color: #666;
}

.stat-link {
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.stat-link:hover {
  color: var(--lang-color);
}

.stat-link:hover .stat-content {
  border-color: var(--lang-color);
  box-shadow: 0 0 6px var(--lang-color);
}

.stat-content {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.project-stats span {
  display: flex;
  align-items: center;
}

.project-author {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 0.9em;
  color: #444;
  text-decoration: none;
  padding: 5px;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-author:hover {
  background-color: rgba(var(--lang-color-rgb), 0.1);
  transform: translateY(-2px);
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
  transition: transform 0.3s ease;
}

.project-author:hover .author-avatar {
  transform: scale(1.1);
}

.author-name {
  position: relative;
  overflow: hidden;
  padding-bottom: 2px;
}

.author-name::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--lang-color);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.project-author:hover .author-name::after {
  transform: translateX(0);
}

.repo-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--lang-color);
  color: v-bind(cardStyle.fontColour);
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: 450;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
  z-index: 1;
}

.repo-link::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--lang-color);
  filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.repo-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.8;
}

.repo-link:hover::before {
  opacity: 0.7;
}
</style>
