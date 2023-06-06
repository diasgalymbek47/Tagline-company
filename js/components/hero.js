const heroMouse = document.querySelector(".hero__mouse");

heroMouse.onclick = () => {
    window.scroll({
        top: document.querySelector(".slider").offsetTop - headerNavbar.scrollHeight,
        behavior: "smooth",
    });
};
