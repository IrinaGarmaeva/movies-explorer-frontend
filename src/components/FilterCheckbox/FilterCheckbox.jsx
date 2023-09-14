import "./FilterCheckbox.css";

const FilterCheckbox = ({isTumblerActive, setIsTumblerActive, handleTumblerClick}) => {
  const handleClick = () => {
    const tumblerState = !isTumblerActive;
    setIsTumblerActive(tumblerState);
    handleTumblerClick(tumblerState);
  }

  return (
    <div className="filter">
      <input type="checkbox" id="toggle" className={isTumblerActive ? 'filter__checkbox filter__checkbox_active' : 'filter__checkbox'}  onClick={handleClick}/>
      <label htmlFor="toggle" className='filter__switch'></label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
