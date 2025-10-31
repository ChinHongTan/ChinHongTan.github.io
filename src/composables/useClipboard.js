import { ref } from "vue";

/**
 * Composable for clipboard operations with feedback
 * @returns {Object} Clipboard utilities
 */
export function useClipboard() {
  const showNotification = ref(false);
  const notificationText = ref("Copied!");

  /**
   * Copy text to clipboard and show notification
   * @param {string} text - Text to copy
   * @param {number} duration - How long to show notification (ms)
   */
  const copyToClipboard = async (text, duration = 2000) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification.value = true;
      notificationText.value = "Copied!";

      setTimeout(() => {
        showNotification.value = false;
      }, duration);

      return true;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      showNotification.value = true;
      notificationText.value = "Failed to copy";

      setTimeout(() => {
        showNotification.value = false;
      }, duration);

      return false;
    }
  };

  return {
    showNotification,
    notificationText,
    copyToClipboard,
  };
}
