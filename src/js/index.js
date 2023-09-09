const modal = document.querySelector("#modal");
const signBtn = document.querySelector("#signup");
const closeModal = document.querySelector("#close-modal");
const inputText = document.querySelector("#register-username");

// Открытие модалки
signBtn.addEventListener("click", () => {
    modal.showModal();
});

// Закрытие модалки
closeModal.addEventListener("click", () => {
    modal.close();
});

/* Обработчик событий текстовый инпут */
inputText.addEventListener("change", (event) => {
    console.log(event.target.value);

    let error = document.querySelector("#username-error");

    if(!event.target.value) {
        error.textContent = "";
    }
    else if (event.target.value.length < 3) {
        error.textContent = "Поле не валидно";
    }

});
