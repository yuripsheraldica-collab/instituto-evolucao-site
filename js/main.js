document.addEventListener("DOMContentLoaded", () => {
  // Menu sanduíche
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Form → WhatsApp
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = form.nome.value.trim();
      const telefone = form.whatsapp.value.trim();
      const especialidade = form.especialidade.value;
      const mensagem = form.mensagem.value.trim();

      const baseUrl = "https://wa.me/5519991612513";

      const texto = [
        "Olá, gostaria de agendar uma avaliação no Instituto Evolução.",
        nome && `Nome: ${nome}`,
        telefone && `WhatsApp: ${telefone}`,
        especialidade && `Área de interesse: ${especialidade}`,
        mensagem && `Mensagem: ${mensagem}`
      ]
        .filter(Boolean)
        .join("\n");

      const url = `${baseUrl}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    });
  }

  // Placeholder de alternância de idioma (integração real via WPML/Polylang)
  const langButtons = document.querySelectorAll(".lang-switch, .lang-switch-footer");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Aqui, em WordPress, você chamaria a função/lang switch do WPML/Polylang.
      // No HTML estático, apenas exibe um aviso no console.
      console.log("Alternância de idioma deve ser configurada via plugin no WordPress.");
    });
  });
});