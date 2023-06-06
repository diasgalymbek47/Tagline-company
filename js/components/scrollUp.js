const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
    updateDashOffset();
    checkPosition();

    if (getTop() > offset) {
        scrollUp.classList.add("active");
    } else {
        scrollUp.classList.remove("active");
    }
});

scrollUp.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });

    header.style.paddingBottom = "0";
    headerNavbar.classList.remove("active");
});

function updateDashOffset() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength) / height;

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
}

function checkPosition() {
    const footer = document.querySelector(".footer");
    if (getTop() + window.innerHeight >= footer.offsetTop) {
        scrollUp.style.bottom = `${footer.scrollHeight + 30}px`;
    } else {
        scrollUp.style.bottom = "50px";
    }
}
