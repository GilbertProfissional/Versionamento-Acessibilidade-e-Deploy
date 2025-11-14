// router.js
import { homeTemplate, cadastroTemplate, sobreTemplate, contatoTemplate, projetosTemplate } from './templates.js';
import { setupFormValidation } from './formValidation.js'; 

export function renderPage(page) {
  const main = document.getElementById('main-content');

  switch (page) {
    case 'home':
      main.innerHTML = homeTemplate();
      break;
    case 'cadastro':
      main.innerHTML = cadastroTemplate();
      setupFormValidation(); 
      break;
    case 'sobre':
      main.innerHTML = sobreTemplate();
      break;
    case 'contato':
      main.innerHTML = contatoTemplate();
      break;
    case 'projetos':
      main.innerHTML = projetosTemplate();
      break;
    default:
      main.innerHTML = homeTemplate();
  }
}
