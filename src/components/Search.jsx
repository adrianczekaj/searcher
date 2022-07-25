import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Persons from './Persons';

function Search({ persons, filters, onFilterChange, onClearFilters }) {
  const filteredPersons = useMemo(
    () =>
      persons
        .filter(
          (x) =>
            x.name.substring(0, filters.name.length).toLowerCase() === filters.name.toLowerCase(),
        )
        .filter((x) => x.height >= filters.heightDownLimit)
        .filter((x) => x.height <= filters.heightUpLimit)
        .filter((x) => (filters.gender === '' ? x : x.gender === filters.gender)),
    [persons, filters.name, filters.heightDownLimit, filters.heightUpLimit, filters.gender],
  );

  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label htmlFor="personName">Name</label>
          <input
            id="personName"
            type="text"
            name="name"
            value={filters.name}
            onChange={onFilterChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="personGender">Gender</label>
          <select name="gender" value={filters.gender} onChange={onFilterChange}>
            <option>&#32;</option>
            <option>woman</option>
            <option>man</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="personHeight">Height</label>
          <input
            type="text"
            name="heightDownLimit"
            value={filters.heightDownLimit === 0 ? '' : filters.heightDownLimit}
            onChange={onFilterChange}
          />
          <label htmlFor="personHeightDivider">-</label>
          <input
            type="text"
            name="heightUpLimit"
            value={filters.heightUpLimit === 300 ? '' : filters.heightUpLimit}
            onChange={onFilterChange}
          />
        </div>
        <button type="button" className="btn btn-block" onClick={onClearFilters}>
          Clear filters
        </button>
      </div>
      <Persons persons={filteredPersons} />
    </>
  );
}

Search.defaultProps = {
  persons: [],
  filters: {
    name: '',
    gender: ' ',
    heightDownLimit: 0,
    heightUpLimit: 300,
  },
  onFilterChange: null,
  onClearFilters: null,
};

Search.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      gender: PropTypes.string,
      height: PropTypes.number,
    }),
  ),
  filters: PropTypes.shape({
    name: PropTypes.number,
    gender: PropTypes.string,
    heightDownLimit: PropTypes.number,
    heightUpLimit: PropTypes.number,
  }),
  onFilterChange: PropTypes.func,
  onClearFilters: PropTypes.func,
};

export default Search;
