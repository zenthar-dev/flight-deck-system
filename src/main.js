// App entry: manages state and layer transitions

document.addEventListener("DOMContentLoaded", () => {
    // We use xPercent and yPercent to preserve the CSS centering and bottom-anchoring.
    // Without this, GSAP's x/y overrides the CSS transform and pushes the plane below the line.
    gsap.fromTo("#plane", 
      {
        // Anchor offset (translates -50% X, -100% Y)
        xPercent: -50,
        yPercent: -100,
        
        // Start State (Descent)
        x: -450,          // Shifted to the upper-left side of the screen
        y: -250,          // 250px above the runway
        rotation: 18,     // Pitch: nose pointing downwards along glide slope
      },
      {
        // Maintain anchor offset
        xPercent: -50,
        yPercent: -100,

        // End State (Touchdown)
        x: 0,             // Align horizontally
        y: 0,             // Sit perfectly on the landing path
        rotation: 0,      // Pitch leveled out
        
        // Easing & Timing
        duration: 2.5,
        ease: "power2.inOut"
      }
    );
});
