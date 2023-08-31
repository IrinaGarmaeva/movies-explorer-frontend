import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from '../Footer/Footer';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation()
  // console.log(location.pathname)

  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru'
  }

  // const headerRoutes = '/' || '/movies' || '/saved-movies' || '/profile';
  // const renderHeader = () => {
  //   console.log(location.pathname)
  //   if (location.pathname === headerRoutes) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // console.log(renderHeader)


  return (
    <div className="root">
      <div className="page">
        {/* {renderHeader && (<Header isLoggedIn={isLoggedIn}/>)} */}
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          {/* <Route path={headerRoutes} element={<Header isLoggedIn={isLoggedIn}/>} /> */}
          {/* <Route path="/" element={} /> */}
          <Route path="/" index={true} element={
            <>
              <Main />
            </>
          }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
