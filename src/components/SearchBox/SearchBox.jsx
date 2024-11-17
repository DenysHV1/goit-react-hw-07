import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const {name} = useSelector(state => state.filters);
  const dispatch = useDispatch();

  return (
    <div className={css.searchContainer}>
      <input
        className={css.searchInput}
        type="text"
        name="searchInput"
        value={name}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder='Find contacts by name'
      ></input>
    </div>
  );
};

export default SearchBox;
