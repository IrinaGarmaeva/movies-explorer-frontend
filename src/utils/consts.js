const SHORT_MOVIES_DURATION = 40;
export const NOTHING_FOUND = "Ничего не найдено";

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

export const moviesFiltredBySearchRequest = (movies, searchRequest) => {
  const request = searchRequest.toLowerCase();
  return movies.filter((movie) => {
    const nameRu = movie.nameRU.toLowerCase();
    const nameEn = movie.nameEN.toLowerCase();
    return nameRu.includes(request) || nameEn.includes(request);
  })
};

export const moviesFiltredByDuration = (movies, isTumblerActive) => {
  console.log(isTumblerActive)
  if(isTumblerActive) {
    return movies.filter((movie) => movie.duration <= SHORT_MOVIES_DURATION)
  } else {
    return movies
  }
}
