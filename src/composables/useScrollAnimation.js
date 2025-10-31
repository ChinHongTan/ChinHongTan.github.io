import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Composable for common scroll-triggered animations
 * Provides reusable animation functions with GSAP and ScrollTrigger
 */
export function useScrollAnimation() {
  /**
   * Fade in element from bottom with scroll trigger
   * @param {string|HTMLElement} target - Element or selector to animate
   * @param {Object} options - Animation options
   */
  const fadeInUp = (target, options = {}) => {
    const defaults = {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
    };

    return gsap.from(target, { ...defaults, ...options });
  };

  /**
   * Fade in element from left with scroll trigger
   */
  const fadeInLeft = (target, options = {}) => {
    const defaults = {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
    };

    return gsap.from(target, { ...defaults, ...options });
  };

  /**
   * Fade in element from right with scroll trigger
   */
  const fadeInRight = (target, options = {}) => {
    const defaults = {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
    };

    return gsap.from(target, { ...defaults, ...options });
  };

  /**
   * Scale in animation with scroll trigger
   */
  const scaleIn = (target, options = {}) => {
    const defaults = {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
    };

    return gsap.from(target, { ...defaults, ...options });
  };

  /**
   * Stagger animation for multiple elements
   */
  const staggerIn = (targets, options = {}) => {
    const defaults = {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: targets,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
    };

    return gsap.from(targets, { ...defaults, ...options });
  };

  /**
   * Clean up all ScrollTrigger instances
   */
  const cleanup = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerIn,
    cleanup,
  };
}
