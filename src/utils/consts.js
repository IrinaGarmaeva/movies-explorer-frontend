export const SHORT_MOVIES_DURATION = 40;
export const NOTHING_FOUND = "Ничего не найдено";
export const SERVER_URL = "https://api.nomoreparties.co"

// get duration
export const duration = (card) => {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration - hours * 60;
  return `${hours}ч ${minutes}м`
}

// Patterns
export const PATTERN_USERNAME = "^[A-Za-zА-Яа-я\- ]{2,30}$"
export const PATTERN_EMAIL = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
export const PATTERN_PASSWORD = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$"


// Validation messages
export const VALIDATION_MESSAGES = {
  frontend: {
    email: "Введите адрес электронной почты",
    password: "Пароль должен быть не короче 8 букв и цифр",
    name: "Имя должно быть от 2 до 30 симв., содержать только буквы, дефис или пробел",
  }
}

// Response messages
export const RESPONSE_MESSAGES = {
  successOnUpdateProfile: "Данные профиля успешно обновлены",
  errorEmail: "Пользователь с таким email уже существует",
  errorGeneral: "Что-то пошло не так! Попробуйте ещё раз",
  successOnRegistration: "Вы успешно зарегистрировались!",
  errorLogin: "Неправильные почта или пароль",
}

