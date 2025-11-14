import { renderPage } from './router.js';
import { setupFormValidation } from './formValidation.js'; // Se precisar usar aquiimport { setupFormValidation } from './formValidation.js'; // Se precisar usar aqui

function loadPage() {
  const page = window.location.hash.replace('#', '') || 'home';
  renderPage(page);
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('DOMContentLoaded', loadPage);