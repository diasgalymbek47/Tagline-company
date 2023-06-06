const services = document.querySelector(".services");

services.addEventListener("click", (e) => {
    if (e.target.classList.contains("services__list-item") || e.target.closest(".services__list-item")) {
        window.location = "https://diasgalymbek47.github.io/Tagline-company/page-404.html";
    }
});
