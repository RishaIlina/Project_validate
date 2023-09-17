const modal = document.querySelector("#modal");
const signBtn = document.querySelector("#signup");
const closeModal = document.querySelector("#close-modal");
const form = document.querySelector("#register-form");
const phone = document.querySelector("#register-phone");
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const emailInput = document.querySelector('input[name="email"]');

// Открытие модалки
signBtn.addEventListener("click", () => {
    modal.showModal();
});

// Закрытие модалки
closeModal.addEventListener("click", () => {
    modal.close();
});

/*
 * Валидация имени пользователя
 * Имя пользователя должно содержать только буквы, не должно быть пустым и содержать меньше 3 символов
 */
usernameInput.addEventListener("input", (event) => {
    const usernameError = document.getElementById("username-error");
    const usernamePattern = /^[a-zA-Zа-яА-Я]+$/;
    const usernameValue = usernameInput.value;
    if (event.target.value === "") {
        event.target.setCustomValidity(
            "Имя пользователя должно быть заполнено",
        );
        usernameError.textContent = "Имя пользователя должно быть заполнено";
    } else if (event.target.value.length < 3) {
        event.target.setCustomValidity(
            "Поле не должно содержать меньше 3х символов",
        );
        usernameError.textContent =
            "Поле не должно содержать меньше 3х символов";
    } else if (!usernamePattern.test(usernameValue)) {
        event.target.setCustomValidity(
            "Имя пользователя должно содержать только буквы",
        );
        usernameError.textContent =
            "Имя пользователя должно содержать только буквы";
    } else {
        event.target.setCustomValidity("");
        usernameError.textContent = "";
    }
});

// Валидация пароля, он должен содержать строчные и прописные латинские буквы, цифры
passwordInput.addEventListener("input", (event) => {
    const passwordError = document.getElementById("password-error");
    const passwordValue = passwordInput.value;
    const passwordPattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if (event.target.value === "") {
        event.target.setCustomValidity("пароль должен быть заполнен");
        passwordError.textContent = "пароль должен быть заполнен";
    } else if (!passwordPattern.test(passwordValue)) {
        event.target.setCustomValidity("Некоректный пароль");
        passwordError.textContent = "Пароль должен содержать строчные и прописные латинские буквы, цифры";
    } else {
        event.target.setCustomValidity("");
        passwordError.textContent = "";
    }
});

// Валидация email
emailInput.addEventListener("input", (event) => {
    const emailError = document.getElementById("email-error");
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (event.target.value === "") {
        event.target.setCustomValidity("почта должна быть заполнена");
        emailError.textContent = "почта должна быть заполнена";
    } else if (!emailPattern.test(emailValue)) {
        event.target.setCustomValidity("Некоректный email");
        emailError.textContent = "Некоректный email";
    } else {
        event.target.setCustomValidity("");
        emailError.textContent = "";
    }
});

// Inputmask для номера телефона
const inputmask = new Inputmask("+7 (999) 999-99-99");
inputmask.mask(phone);
