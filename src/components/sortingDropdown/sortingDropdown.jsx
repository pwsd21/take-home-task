import { OPTION_DATA } from "../../constants/constants";
import classes from "./sortingDropdown.module.css";

const SortingDropDown = ({ value, setValue, handleSelect }) => {
  return (
    <div className={classes.sorting}>
      <input
        type="search"
        className={classes.searchBar}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select className={classes.selectField} onChange={(e) => handleSelect(e)}>
        {OPTION_DATA.map((item) => (
          <option key={item.id} value={item.id}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortingDropDown;
