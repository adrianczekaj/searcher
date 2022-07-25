import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';
import AddPerson from './AddPerson';
import Persons from './Persons';

function MainPage({
  persons,
  showSearchPersons,
  showAddPerson,
  onSearch,
  onAddPerson,
  filters,
  onFilterChange,
  onClearFilters,
}) {
  return (
    <>
      <Header
        title={showAddPerson ? 'Add person' : 'List of persons'}
        onSearch={onSearch}
        showSearch={showSearchPersons}
        onAddPerson={onAddPerson}
      />

      {showSearchPersons && (
        <>
          <Search
            persons={persons}
            filters={filters}
            onFilterChange={onFilterChange}
            onClearFilters={onClearFilters}
          />
        </>
      )}
      {showAddPerson && (
        <>
          <AddPerson />
        </>
      )}
      {!showSearchPersons && (
        <>
          <Persons persons={persons} />
        </>
      )}
    </>
  );
}

MainPage.defaultProps = {
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

MainPage.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      gender: PropTypes.string,
      height: PropTypes.number,
    }),
  ),
  showSearchPersons: PropTypes.bool,
  filters: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    heightDownLimit: PropTypes.number,
    heightUpLimit: PropTypes.number,
  }),
  onSearch: PropTypes.func,
  onFilterChange: PropTypes.func,
  onClearFilters: PropTypes.func,
};

export default MainPage;
