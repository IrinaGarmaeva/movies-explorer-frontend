import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <div className="search">
      <form className="search__form" autoComplete="off">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          // value={}
          // onChange={handleChange}
          minLength='2'
        />
        <button type="button" className="search__button">Поиск</button>
      </form>
      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;
