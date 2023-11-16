import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from "redux/filterSlice";
import { selectFilter } from 'redux/selectors';
import { FilterStyle } from "./Filter.styled";

export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
  
    const handleFilterChange = (event) => {
      dispatch(filterValue(event.target.value));
    };

    return(
        <FilterStyle>
            <label className='label' htmlFor="filter">
                <input className="input"
                    type="text"
                    name="filter"
                    title="Name may contain only letters, apostrophe, dash and spaces"
                    required
                    placeholder=''
                    value={filter}
                    onChange={handleFilterChange}></input>
            </label>
        </FilterStyle>
    )
};
