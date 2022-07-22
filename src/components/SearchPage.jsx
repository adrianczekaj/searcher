import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import Persons from './Persons';

function SearchPage({
  persons,
  showSearchPersons,
  onSearch,
  filters,
  onFilterChange,
  onClearFilters,
}) {
  return (
    <>
      <Header title="List of persons" onSearch={onSearch} showSearch={showSearchPersons} />
      {showSearchPersons ? (
        <Search
          persons={persons}
          filters={filters}
          onFilterChange={onFilterChange}
          onClearFilters={onClearFilters}
        />
      ) : (
        <Persons persons={persons} />
      )}
    </>
  );
}

SearchPage.defaultProps = {
  persons: [],
  showSearchPersons: false,
  filters: {
    name: '',
    gender: '',
    heightDownLimit: 0,
    heightUpLimit: 300,
  },
  onSearch: null,
  onFilterChange: null,
  onClearFilters: null,
};

SearchPage.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      gender: PropTypes.string,
      height: PropTypes.number,
    }),
  ),
  showSearchPersons: PropTypes.bool,
  filters: {
    name: PropTypes.number,
    gender: PropTypes.string,
    heightDownLimit: PropTypes.number,
    heightUpLimit: PropTypes.number,
  },
  onSearch: PropTypes.func,
  onFilterChange: PropTypes.func,
  onClearFilters: PropTypes.func,
};

export default SearchPage;
