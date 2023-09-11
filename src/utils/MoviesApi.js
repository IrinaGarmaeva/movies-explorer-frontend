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

  //Search movie
  async getMovies() {
    const response = await fetch(`${this._baseUrl}`, {
      headers: this._headers,
    })
    return this._checkResponse(response);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default moviesApi;
