import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <div className="filter">
      <input type="checkbox" id="toggle" className="filter__checkbox" />
      <label for="toggle" className="filter__switch"></label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
