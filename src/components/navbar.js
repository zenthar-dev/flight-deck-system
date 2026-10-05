class AxiomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="nav" id="nav">
        <a class="brand" href="/" aria-label="Axiom home">
          <img class="mark" alt="" src="assets/logo-mark.png" width="164" height="160">
          <img class="word" alt="Axiom" src="assets/logo-wordmark.png" width="263" height="48">
        </a>

        <label class="cmd">
          <svg class="ico" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 15.5v-2L13.5 9V3.8c0-.9-.7-1.8-1.5-1.8s-1.5.9-1.5 1.8V9L3 13.5v2l7.5-2.2V18l-2 1.5V21l3.5-1 3.5 1v-1.5l-2-1.5v-4.7z"/></svg>
          <input id="q" type="text" inputmode="search" enterkeyhint="search" autocomplete="off" aria-label="Where do you want to fly" placeholder="Where to next? Pick your route, dates and seat.">
          <span class="keys" aria-hidden="true"><kbd id="mod">Ctrl</kbd><kbd>K</kbd></span>
        </label>

        <div class="right">
          <button class="icon locate" aria-label="Use my location" title="Use my location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 1v5M12 18v5M1 12h5M18 12h5"/></svg>
          </button>
          <button class="login" id="login">Get Started <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
          <button class="me" id="me" aria-label="Open profile"><span>John Doe</span><i>JD</i></button>
        </div>
      </header>
    `;

    const q = this.querySelector('#q');
    const mod = this.querySelector('#mod');
    
    if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) {
      if (mod) mod.textContent = '\u2318';
    }
    
    const mq = matchMedia('(max-width:640px)');
    const updatePlaceholder = () => {
      q.placeholder = mq.matches ? 'Where to next?' : 'Where to next? Pick your route, dates and seat.';
    };
    updatePlaceholder();
    mq.addEventListener('change', updatePlaceholder);

    // Global keyboard shortcut (Ctrl/Cmd + K) to focus search
    window.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        q.focus();
      }
    });

    // Handle Enter key for search
    q.addEventListener('keydown', e => {
      if (e.key === 'Enter' && q.value.trim()) {
        const query = q.value.trim();
        // Redirect to real flight search page / route
        window.location.hash = '#search=' + encodeURIComponent(query);
      }
    });

    const nav = this.querySelector('#nav');
    const loginBtn = this.querySelector('#login');
    const meBtn = this.querySelector('#me');

    // Authentication wiring
    const checkAuth = () => {
      // Basic check for auth token/user state.
      const isLoggedIn = localStorage.getItem('axiom_auth_token');
      if (isLoggedIn) {
        nav.classList.add('signed');
      } else {
        nav.classList.remove('signed');
      }
    };
    checkAuth();

    // "Get Started >" goes to login/signup flow
    loginBtn.addEventListener('click', () => {
      window.location.hash = '#login';
      // For demonstration in the preview, log the user in:
      localStorage.setItem('axiom_auth_token', 'true');
      checkAuth();
    });

    // Profile chip behavior
    meBtn.addEventListener('click', () => {
      // You could open a profile dropdown here.
      // For now, let's allow logging out for testing.
      localStorage.removeItem('axiom_auth_token');
      checkAuth();
    });
  }
}

customElements.define('axiom-navbar', AxiomNavbar);
