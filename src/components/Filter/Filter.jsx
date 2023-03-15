import PropTypes from 'prop-types';
import { WrapFilter, FilterLabel, FilterInput } from 'PhoneBook.styled';

export default function Filter({ value, onFilter }) {
  return (
    <WrapFilter>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onFilter}
      />
    </WrapFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};