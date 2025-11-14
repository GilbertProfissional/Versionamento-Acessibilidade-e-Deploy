export function setupFormValidation() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    let error = '';
    if (nome.length < 3) error = 'Nome deve ter pelo menos 3 caracteres.';
    else if (!email.includes('@')) error = 'Email inválido.';
    const errorDiv = document.getElementById('form-error');
    if (error) {
      errorDiv.textContent = error;
      errorDiv.style.color = 'red';
    } else {
      errorDiv.textContent = '';
      // Salvar no localStorage
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ nome, email });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Cadastro realizado com sucesso!');
      form.reset();
    }
  });
}