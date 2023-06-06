document.querySelector("body").classList.add("disable");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector("body").classList.remove("disable");
        document.querySelector(".page-loader").classList.add("hide");
    }, 1000);
});
