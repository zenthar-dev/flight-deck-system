# Prompt for the Antigravity agent

Paste everything below into the agent chat of your project.

---

I have a finished navbar design in the folder `axiom-navbar/` (index.html, navbar.css, navbar.js, assets/). Please port it into this project as the top navbar of the main dashboard.

1. First inspect the project (framework, styling approach, routing, auth) and follow its conventions. Create a reusable `Navbar` component in the right place, move the two logo images from `axiom-navbar/assets/` into the project's public/assets folder, and use them.
2. Keep the visuals and behaviour exactly as in `axiom-navbar/index.html`. Do not simplify or restyle anything. Specifically:
   - One row on every screen size, sticky at the top, with a gradient line along the bottom edge and a soft orange/magenta glow only BELOW the line (never above it).
   - Left: triangle logo mark + small "AXIOM" wordmark. On screens up to 640px the wordmark is hidden and only the mark shows.
   - Centre: pill-shaped glass search box with a plane icon. On focus (click, tap, or Ctrl/Cmd+K) the plane rotates 45 degrees and lifts like a take-off, and returns on blur. Ctrl/Cmd+K keycaps show on desktop only; the shortcut shows Cmd on Mac and Ctrl elsewhere. On phones the placeholder is shorter ("Where to next?").
   - Right: a location (crosshair) button, hidden on phones, and a liquid-glass "Get Started >" button with no outer shadow and no pop or scale on hover, but a light that moves in a circle inside the button while hovered. Smaller text and padding on phones. After login this becomes a profile chip (avatar, and the name on desktop only).
   - Respect prefers-reduced-motion and keep visible keyboard focus.
3. Wire it up instead of the demo logic in navbar.js: "Get Started" should go to our login or sign-up flow, the profile chip should reflect the real auth state, and pressing Enter in the search box should start our real flight search. Remove the demo toggle and the console.log.
4. Use the project's existing global styles where sensible, but make sure the demo-page globals at the top of navbar.css (:root, html, body, main) do not override our app styles.
5. When finished, run the project, check the navbar at desktop, tablet and phone widths, and tell me what you changed.
