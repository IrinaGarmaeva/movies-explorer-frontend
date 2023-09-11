import { useEffect } from "react";
import "./SearchForm.css";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import useFormAndValidation from "../../hooks/useFormAndValidation";


const SearchForm = ({ searchRequest, setSearchRequest, onSearch, isValid, isTumblerActive, setIsTumblerActive, handleTumblerClick}) => {
  // const { values, handleChange } = useFormAndValidation();

function handleChange(evt) {
  setSearchRequest(evt.target.value)
}

  function handleSubmit(evt) {
    evt.preventDefault();
    // onSearch(values.search);
    onSearch(searchRequest);
  }

  // useEffect(() => {

  // })

  return (
    <section className="search">
      <form className="search__form" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          name="search"
          // value={values.search  || ''}
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
