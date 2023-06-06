function showModal(modalClassName) {
    const modal = document.querySelector(`.${modalClassName}`);
    const modalWrapper = modal.querySelector(".modal__wrapper");

    modal.classList.add("show");
    document.querySelector("body").classList.add("disable");

    modal.addEventListener("click", () => {
        modal.classList.remove("show");
        document.querySelector("body").classList.remove("disable");
    });

    modalWrapper.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

function closeModal() {
    const modal = this.closest(".modal");

    modal.classList.remove("show");
    document.querySelector("body").classList.remove("disable");
}
