import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
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
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { RESPONSE_MESSAGES } from "../../utils/consts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isResponse, setIsResponse] = useState("");
  const [isSuccessRequest, setIsSuccessRequest] = useState(null);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(12);

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

  // const user = {
  //   name: "Виталий",
  //   email: "pochta@yandex.ru",
  // };

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

  function toggleMenu() {
    setIsLoggedIn((prevState) => !prevState);
  }

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  const closePopup = () => setIsInfoPopupOpen(false);

  function checkToken() {
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

  function handleRegister(name, email, password, resetForm) {
    setIsLoading(true);
    mainApi
      .registerUser(name, email, password)
      .then((res) => {
        console.log(res);
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

  function handleLogIn(email, password) {
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    mainApi.loginUser(email, password)
    .then((res) => {
      console.log(res);
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

  function handleLogOut() {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  function updateUserInfo(name, email, resetForm) {
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
        // setCurrentUser(currentUser);
        // window.location.reload()
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          {headerRoutes ? <Header isLoggedIn={isLoggedIn} /> : ""}
          <main className="main">
            <Routes>
              <Route path="/" index={true} element={<Main />} />
              <Route
                path="/signup"
                element={<Register onRegister={handleRegister} />}
              />
              <Route path="/signin" element={<Login onLogin={handleLogIn} />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={<Movies />}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={<SavedMovies />}
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
                        currentUser={currentUser}
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
