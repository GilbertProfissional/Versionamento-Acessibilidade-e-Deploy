document.addEventListener("DOMContentLoaded", function () {
    const btnToggle = document.getElementById("btnNavToggle");
    const navMenu = document.getElementById("primary-navigation");
    const spanText = btnToggle.querySelector(".sr-only");
    btnToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        btnToggle.setAttribute("aria-expanded", isOpen);//Atualiza o estado do botão
        //Atualiza o texto dentro do span
        spanText.textContent = isOpen ? "Fechar Menu" : "Abrir Menu";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    // Máscara CPF: 000.000.000-00
    cpf.addEventListener("input", function () {
        let value = cpf.value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpf.value = value;
    });

    // Máscara Telefone: (00) 00000-0000
    telefone.addEventListener("input", function () {
        let value = telefone.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/^(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        telefone.value = value;
    });

    // Máscara CEP: 00000-000
    cep.addEventListener("input", function () {
        let value = cep.value.replace(/\D/g, "");
        if (value.length > 8) value = value.slice(0, 8);
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        cep.value = value;
    });
});


