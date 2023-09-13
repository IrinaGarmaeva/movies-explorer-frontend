import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import InfoPopup from "../InfoPopup/InfoPopup";

import { RESPONSE_MESSAGES } from "../../utils/consts";
import { saveToLocalStorage, getFromLocalStorage } from "../../utils/localStorageFunctions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isResponse, setIsResponse] = useState("");
  const [isSuccessRequest, setIsSuccessRequest] = useState(null);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [moviesSaved, setMoviesSaved] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const headerRoutes =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";
  const footerRoutes =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserdata()
        .then((userData) => {
          setCurrentUser({
            ...userData,
            name: userData.name,
            email: userData.email,
          });
        })
        .catch((error) => console.log(`Error: ${error.status}`));
    }
  }, [isLoggedIn]);

  const toggleMenu = () => setIsLoggedIn((prevState) => !prevState);

  const closePopup = () => setIsInfoPopupOpen(false);

  const checkToken = () => {
    mainApi
      .getToken()
      .then((res) => {
        if (!res) {
          return;
        }
        if (res.status !== 401) {
          setIsLoggedIn(true);
          navigate(location.pathname);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  }

  useEffect(() => {
    checkToken();
  }, []);

  const handleRegister = (name, email, password, resetForm) => {
    setIsLoading(true);
    mainApi
      .registerUser(name, email, password)
      .then((res) => {
        setIsSuccessRequest(true);
        setIsLoggedIn(true);
        setIsResponse(RESPONSE_MESSAGES.successOnRegistration);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessRequest(false);
        if (err === "Ошибка: 409") {
          return setIsResponse(RESPONSE_MESSAGES.errorEmail);
        }
        return setIsResponse(RESPONSE_MESSAGES.errorGeneral);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInfoPopupOpen(true);
        resetForm();
      });
  }

  const handleLogIn = (email, password) => {
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    mainApi.loginUser(email, password)
    .then((res) => {
      setIsLoggedIn(true);
      navigate("/movies", { replace: true });
    })
    .catch((err) => {
      setIsInfoPopupOpen(true);
      setIsSuccessRequest(false);
      if(err === "Ошибка: 401") {
        return setIsResponse(RESPONSE_MESSAGES.errorLogin);
      }
      return setIsResponse(RESPONSE_MESSAGES.errorGeneral);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const handleLogOut = () => {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  const updateUserInfo = (name, email, resetForm) => {
    setIsLoading(true);
    mainApi
      .editUserdata(name, email)
      .then((userData) => {
        setCurrentUser({
          ...userData,
          name: userData.name,
          email: userData.email,
        });
        setIsSuccessRequest(true);
        setIsResponse(RESPONSE_MESSAGES.successOnUpdateProfile);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessRequest(false);
        if (err === "Ошибка: 409") {
          return setIsResponse(RESPONSE_MESSAGES.errorEmail);
        }
        return setIsResponse(RESPONSE_MESSAGES.errorGeneral);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInfoPopupOpen(true);
      });
  }

  const handleLike = (movie) => {
    mainApi.addMovieToFavorites(movie)
      .then((data) => {
        setMoviesSaved([data, ...moviesSaved])
        saveToLocalStorage('saved-movies', [data, ...moviesSaved])
      })
      .catch(err => console.log(err))
  }

  const handleDeleteLike = (movie) => {
    let id = movie._id

    if(!id && moviesSaved.length > 0) {
      const movieFound = moviesSaved.find(card => card.movieId === movie.movieId)
      movieFound && (id = movieFound._id)
    }

    if(id) {
      const moviesSavedFromLocalStorage = getFromLocalStorage('saved-movies') || [];
      mainApi.deleteMovieFromFavotites(movie._id)
        .then(() => {
          setMoviesSaved(moviesSaved.filter((card) => card._id !== id));
          saveToLocalStorage('saved-movies', moviesSavedFromLocalStorage.filter((card) => card._id !== id) )
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          {headerRoutes ? <Header isLoggedIn={isLoggedIn} /> : ""}
          <main className="main">
            <Routes>
              <Route path="/" index={true} element={<Main />} />
              {!isLoggedIn && <Route
                path="/signup"
                element={<Register onRegister={handleRegister} />}
              />}
              {!isLoggedIn && <Route path="/signin" element={<Login onLogin={handleLogIn} />} />}
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={<Movies handleLike={handleLike} handleDeleteLike={handleDeleteLike} moviesSaved={moviesSaved} setMoviesSaved={setMoviesSaved} />}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={<SavedMovies moviesSaved={moviesSaved} setMoviesSaved={setMoviesSaved} handleDeleteLike={handleDeleteLike}/>}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={
                      <Profile
                        toggleMenu={toggleMenu}
                        onEditProfile={updateUserInfo}
                        onSignOut={handleLogOut}
                        isLoading={isLoading}
                      />
                    }
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          {footerRoutes ? <Footer /> : ""}
          <InfoPopup
            isOpen={isInfoPopupOpen}
            onClose={closePopup}
            isSucess={isSuccessRequest}
            message={isResponse}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
