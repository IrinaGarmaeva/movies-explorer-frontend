export const SERVER_URL = "https://api.nomoreparties.co";
export const BASE_URL = "https://api.movies.irina.nomoredomainsicu.ru";
export const BEATFILM_MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";
export const SHORT_MOVIES_DURATION = 40;
export const NOTHING_FOUND = "Ничего не найдено";
export const WIDTH_1275 = 1275;
export const WIDTH_767 = 767;
export const CARDS_12 = 12;
export const CARDS_8 = 8;
export const CARDS_5 = 5;
export const CARDS_3 = 3;
export const CARDS_2 = 2;
export const CARDS_1 = 1;

// get duration
export const duration = (card) => {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration - hours * 60;
  return `${hours}ч ${minutes}м`
};

// Patterns
export const PATTERN_USERNAME = /^[A-Za-zА-Яа-я\- ]{2,30}$/
export const PATTERN_EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/
export const PATTERN_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

// Validation messages
export const VALIDATION_MESSAGES = {
  frontend: {
    email: "Введите корректный адрес электронной почты",
    //password: "Пароль должен быть не менее 8 символов, содержать как минимум 1 цифру, 1 букву верхнего и 1 нижнего регистра",
    password: "Введите не менее 8 символов, как минимум 1 цифру, 1 букву верхнего и 1 нижнего регистра",
    //name: "Имя должно быть от 2 до 30 симв., содержать только буквы, дефис или пробел",
    name: "Введите от 2 до 30 симв., только буквы, дефис или пробел",
  }
};

// Response messages
export const RESPONSE_MESSAGES = {
  successOnUpdateProfile: "Данные профиля успешно обновлены",
  errorEmail: "Пользователь с таким email уже существует",
  errorGeneral: "Что-то пошло не так! Попробуйте ещё раз",
  successOnRegistration: "Вы успешно зарегистрировались!",
  errorLogin: "Неправильные почта или пароль",
};

