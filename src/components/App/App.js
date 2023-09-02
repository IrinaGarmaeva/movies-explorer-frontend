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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(12);

  const location = useLocation();
  const pathname = location.pathname
  const headerRoutes = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile'
  const footerRoutes = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies'

  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru'
  }

  function toggleMenu () {
    setIsLoggedIn(prevState => !prevState)
  }

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className="root">
      <div className="page">
        {headerRoutes ? <Header isLoggedIn={isLoggedIn}/> : ''}
        <Routes>
          <Route path="/" index={true} element={<Main />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login toggleMenu={toggleMenu}/>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile user={user} toggleMenu={toggleMenu}/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {footerRoutes ? <Footer /> : ''}
      </div>
    </div>
  );
}

export default App;
