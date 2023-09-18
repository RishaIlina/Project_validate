const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const modalContainer = document.querySelector(".modal-container");
const phone = document.querySelector("#register-phone");
const usernameSigninInput = document.querySelector('input[name="username-signin"]');
const passwordInput = document.querySelector('input[name="password"]');
const emailInput = document.querySelector('input[name="email"]');
const usernameSignupInput = document.querySelector('input[name="username-signup"]');
const passwordSignupInput = document.querySelector('input[name="password-signup"]');

// Переключаем форму входа и регистрации
signUpBtn.addEventListener("click", function () {
    formBox.classList.add("active");
    modalContainer.classList.add("active");
});

signInBtn.addEventListener("click", function () {
    formBox.classList.remove("active");
    modalContainer.classList.remove("active");
});

// Форма входа
/*
 * Валидация логина
 * Логин должен содержать только буквы, не должен быть пустым и содержать меньше 3 символов
 */
usernameSigninInput.addEventListener("input", event => {
    const usernameError = document.getElementById("username-error");
    const usernamePattern = /^[a-zA-Zа-яА-Я]+$/;
    const usernameValue = usernameSigninInput.value;
    if (event.target.value === "") {
        event.target.setCustomValidity("Логин должен быть заполнен");
        usernameError.textContent = "Логин должен быть заполнен";
    } else if (event.target.value.length < 3) {
        event.target.setCustomValidity(
            "Поле не должно содержать меньше 3х символов",
        );
        usernameError.textContent =
            "Поле не должно содержать меньше 3х символов";
    } else if (!usernamePattern.test(usernameValue)) {
        event.target.setCustomValidity("Логин должен содержать только буквы");
        usernameError.textContent = "Логин должен содержать только буквы";
    } else {
        event.target.setCustomValidity("");
        usernameError.textContent = "";
    }
});

// Валидация пароля, он должен содержать строчные и прописные латинские буквы, цифры
passwordInput.addEventListener("input", event => {
    const passwordError = document.getElementById("password-error");
    const passwordValue = passwordInput.value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if (event.target.value === "") {
        event.target.setCustomValidity("пароль должен быть заполнен");
        passwordError.textContent = "пароль должен быть заполнен";
    } else if (!passwordPattern.test(passwordValue)) {
        event.target.setCustomValidity("Некоректный пароль");
        passwordError.textContent = "Некоректный пароль";
    } else {
        event.target.setCustomValidity("");
        passwordError.textContent = "";
    }
});

/*
 * Форма регистрации
 * Валидация имени пользователя
 * Имя пользователя должно содержать только буквы, не должно быть пустым и содержать меньше 3 символов
 */
usernameSignupInput.addEventListener("input", event => {
    const usernameError = document.getElementById("username-signup-error");
    const usernamePattern = /^[a-zA-Zа-яА-Я]+$/;
    const usernameSignupValue = usernameSignupInput.value;
    if (event.target.value === "") {
        event.target.setCustomValidity("Имя должно быть заполнено");
        usernameError.textContent = "Имя должно быть заполнено";
    } else if (event.target.value.length < 3) {
        event.target.setCustomValidity(
            "Поле не должно содержать меньше 3х символов",
        );
        usernameError.textContent =
            "Поле не должно содержать меньше 3х символов";
    } else if (!usernamePattern.test(usernameSignupValue)) {
        event.target.setCustomValidity("Имя должно содержать только буквы");
        usernameError.textContent = "Имя должно содержать только буквы";
    } else {
        event.target.setCustomValidity("");
        usernameError.textContent = "";
    }
});

// Валидация email
emailInput.addEventListener("input", event => {
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

// Валидация пароля, он должен содержать строчные и прописные латинские буквы, цифры
passwordSignupInput.addEventListener("input", event => {
    const passwordSignupError = document.getElementById("password-signup-error");
    const passwordSignupValue = passwordSignupInput.value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if (event.target.value === "") {
        event.target.setCustomValidity("пароль должен быть заполнен");
        passwordSignupError.textContent = "пароль должен быть заполнен";
    } else if (!passwordPattern.test(passwordSignupValue)) {
        event.target.setCustomValidity("Некоректный пароль");
        passwordSignupError.textContent = "Некоректный пароль";
    } else {
        event.target.setCustomValidity("");
        passwordSignupError.textContent = "";
    }
});

// Inputmask для номера телефона
const inputmask = new Inputmask("+7 (999) 999-99-99");
inputmask.mask(phone);
