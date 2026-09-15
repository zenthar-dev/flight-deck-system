// App entry: manages state and layer transitions

document.addEventListener("DOMContentLoaded", () => {
  
  // We use GSAP to set the initial states so we don't conflict with CSS Transforms
  
  // Hide Brand and shift it down slightly for a slide-up effect
  gsap.set("#axiom-text", { 
    xPercent: -50, 
    y: 30, 
    opacity: 0 
  });
  
  // Position Plane offscreen to the upper-left
  gsap.set("#plane", {
    xPercent: -50,
    yPercent: -100,
    x: "-45vw",
    y: "-25vh", // Shifted down from -45vh
    rotation: 18,
    opacity: 1
  });

  // Phase 2: Animation Choreography GSAP Timeline
  const tl = gsap.timeline({ delay: 0.5 });

  // Fix runway transform anchor so GSAP rotation doesn't break centering
  gsap.set("#runway", { xPercent: -50, yPercent: -50 });

  // Step 2.1: The Descent
  tl.to("#plane", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 3.5, // Slowed down slightly for cinematic feel
    ease: "power2.inOut"
  });

  // Step 2.2: The Roll & Fade
  tl.to("#plane", {
    x: "+=80px", // Rolls forward slightly
    opacity: 0,  // Fades out
    duration: 0.8,
    ease: "power1.out"
  });

  // Step 2.3: The Massive Brand Reveal
  // Triggers exactly after the landing animation (plane fade) gets over
  tl.to("#axiom-text", {
    y: 0,        // Slides up to original position
    opacity: 1,  // Fades in
    duration: 1.5,
    ease: "power3.out"
  }, "+=0.2"); // Added a tiny 0.2s dramatic pause before the brand reveals

  // Step 2.4: The Compass Needle Morph
  // The runway line shrinks down into a smaller needle shape
  tl.to("#runway", {
    width: "140px", 
    duration: 1,
    ease: "power3.inOut"
  }, "<"); // Starts at exactly the same time as the Brand Reveal

  // The arrow tip fades in on the right edge
  tl.to("#needle-tip", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  }, "<0.5"); // Fades in halfway through the shrink

  // Step 2.5: The Forward Thrust
  // The arrow shoots horizontally to the right, aligning under the "M"
  tl.to("#runway", {
    x: 180, // Shifts it 180px to the right
    duration: 1.5,
    ease: "power2.inOut"
  }, "+=0.3"); // Wait a tiny bit after the morph completes before shooting forward
});
