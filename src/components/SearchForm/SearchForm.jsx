import "./SearchForm.css";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ searchRequest, setSearchRequest, onSearch, isValid, isTumblerActive, setIsTumblerActive, handleTumblerClick}) => {
  function handleChange(evt) {
    setSearchRequest(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(searchRequest);
  }

  return (
    <section className="search">
      <form className="search__form" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          name="search"
          value={searchRequest}
          onChange={handleChange}
          required
        />
        <span className="search__input-error">{!isValid ? 'Нужно ввести ключевое слово' : ''}</span>
        <Button className={'search__button'} type={'submit'} text={'Поиск'} />
        <FilterCheckbox isTumblerActive={isTumblerActive} setIsTumblerActive={setIsTumblerActive} handleTumblerClick={handleTumblerClick}/>
      </form>
    </section>
  );
};

export default SearchForm;
