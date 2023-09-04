import "./SearchForm.css";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form" autoComplete="off">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          // value={}
          // onChange={handleChange}
          minLength='2'
          required
        />
        <Button className={'search__button'} type={'button'} text={'Поиск'}/>
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
