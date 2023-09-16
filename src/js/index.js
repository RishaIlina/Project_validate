const modal = document.querySelector("#modal");
const signBtn = document.querySelector("#signup");
const closeModal = document.querySelector("#close-modal");
const form = document.querySelector("#register-form");
const phone = document.querySelector("#register-phone");
const usernameInput = document.querySelector('input[name="username"]');


// Открытие модалки
signBtn.addEventListener("click", () => {
    modal.showModal();
});

// Закрытие модалки
closeModal.addEventListener("click", () => {
    modal.close();
});

 // Валидация имени пользователя
// Поле не должно быть пустым и содержать меньше 3 символов
usernameInput.addEventListener("input", (event) => {

const usernameError = document.querySelector(".input-error");
const usernamePattern = /^[a-zA-Zа-яА-Я]+$/;
const usernameValue = usernameInput.value;
if (event.target.value === "") {
   event.target.setCustomValidity("Имя пользователя должно быть заполнено");
   usernameError.textContent = "Имя пользователя должно быть заполнено";
} else if (event.target.value.length < 3) {
   event.target.setCustomValidity("Поле не должно содержать меньше 3х символов");
   usernameError.textContent = "Поле не должно содержать меньше 3х символов";
} else if (!usernamePattern.test(usernameValue)) {
    event.target.setCustomValidity("Имя пользователя должно содержать только буквы");
    usernameError.textContent = "Имя пользователя должно содержать только буквы";
} else {
   event.target.setCustomValidity("");
   usernameError.textContent = "";
}
});




// inputmask для номера телефона
const inputmask = new Inputmask('+7 (999) 999-99-99');
inputmask.mask(phone);
