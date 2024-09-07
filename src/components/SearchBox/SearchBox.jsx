import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filterValue} onChange={handleFilter} />
    </>
  );
};
