import { BEATFILM_MOVIES_URL } from "./consts";
class MoviesApi {
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

  // Get all movies
  async getMovies() {
    const response = await fetch(`${this._baseUrl}`, {
      headers: this._headers,
    })
    return this._checkResponse(response);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: BEATFILM_MOVIES_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default moviesApi;
