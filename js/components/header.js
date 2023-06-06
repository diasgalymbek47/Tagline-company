const header = document.querySelector(".header");
const headerNavbar = header.querySelector(".header__navbar");
const headerMenu = header.querySelector(".header__menu");

let oldScroll = 0;

window.addEventListener("scroll", () => {
    if (getTop() >= oldScroll && getTop() >= 200) {
        header.style.paddingBottom = `${headerNavbar.scrollHeight}px`;
        headerNavbar.classList.add("active");
    } else {
        header.style.paddingBottom = "0";
        headerNavbar.classList.remove("active");
    }

    oldScroll = getTop();
});

headerMenu.addEventListener("click", (e) => {
    const id = e.target.id;
    const component = document.querySelector(`.${id}`);

    window.scroll({
        top: component.offsetTop - headerNavbar.scrollHeight,
        behavior: "smooth",
    });
});
