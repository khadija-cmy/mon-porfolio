document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (valid) {
      alert("Merci pour votre message ! Nous vous répondrons bientôt.");
      form.reset();
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
});
