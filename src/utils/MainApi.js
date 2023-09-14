import { SERVER_URL, BASE_URL } from "./consts";
class MainApi {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
      return res.json();
  }

  // Get current user data
  async getUserdata() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  // Edit user data
  async editUserdata(newName, newEmail) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: newName,
        email: newEmail
      })
    })
    return this._checkResponse(response);
  }

  // User registration
  async registerUser(name, email, password) {
    const response = await fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    })
    return this._checkResponse(response);
  }

  // User log in
  async loginUser(email, password) {
    const response = await fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email, password
      }),
    });
    return this._checkResponse(response);
  }

  // User log out
  async logout(){
    const response = await fetch(`${this._baseUrl}/signout`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  // Get token to check authentication
  async getToken() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
    return this._checkResponse(response)
  }

  async addMovieToFavorites(movie) {
    const response = await fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${SERVER_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${SERVER_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      })
    })
    return this._checkResponse(response)
  }

  async getFavouriteMovies() {
    const response = await fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
    })
    return this._checkResponse(response)
  }

  async deleteMovieFromFavotites(movieId) {
    const response = await fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    return this._checkResponse(response)
  }
}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
  credentials: 'include',
});

export default mainApi;
