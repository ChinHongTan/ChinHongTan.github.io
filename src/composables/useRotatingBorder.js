import { ref, computed, onUnmounted } from "vue";
import { useRafFn } from "@vueuse/core";

/**
 * Composable for animated rotating gradient border effect
 * @param {Object} options - Configuration options
 * @returns {Object} - Style object and control functions
 */
export function useRotatingBorder(options = {}) {
  const {
    speed = 0.5,
    colors = [
      "#f79533",
      "#f37055",
      "#ef4e7b",
      "#a166ab",
      "#5073b8",
      "#1098ad",
      "#07b39b",
      "#6fba82",
      "#f79533",
    ],
    autoStart = true,
  } = options;

  const gradientPosition = ref(0);

  const borderStyle = computed(() => ({
    background: `linear-gradient(60deg, ${colors.join(", ")})`,
    backgroundSize: "1000% 100%",
    backgroundPosition: `${gradientPosition.value}% 50%`,
  }));

  const { pause, resume } = useRafFn(
    () => {
      gradientPosition.value = (gradientPosition.value + speed) % 100;
    },
    { immediate: autoStart }
  );

  // Cleanup on unmount
  onUnmounted(() => {
    pause();
  });

  return {
    borderStyle,
    gradientPosition,
    pause,
    resume,
  };
}
