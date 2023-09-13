const modal = document.querySelector("#modal");
const signBtn = document.querySelector("#signup");
const closeModal = document.querySelector("#close-modal");
const input = document.querySelectorAll("input");
const form =document.querySelector("#register-form");
const inputText = document.querySelector("#register-username");
const password = document.querySelector("#register-password");
const email = document.querySelector("#register-email");
const phone = document.querySelector("#register-phone");


// Открытие модалки
signBtn.addEventListener("click", () => {
    modal.showModal();
});

// Закрытие модалки
closeModal.addEventListener("click", () => {
    modal.close();
});

// Выдаем ошибку при пустом input
// Снятие фокуса с input
input.forEach(element => {
    element.addEventListener('blur', () => {
    if (element.value.length === 0) {
    showErr(element, "Can't be blank")
    }
    });
    });

// inputmask для номера телефона
const inputmask = new Inputmask('+7 (999) 999-99-99');
inputmask.mask(phone);
