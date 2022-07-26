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
  onSearchPersons,
  onAddPerson,
  filters,
  onFilterChange,
  onClearFilters,
}) {
  return (
    <>
      <Header
        title={showAddPerson ? 'Add person' : 'List of persons'}
        onSearchPersons={onSearchPersons}
        showSearch={showSearchPersons}
        onAddPerson={onAddPerson}
        showAddPerson={showAddPerson}
      />

      {showSearchPersons && (
        <Search
          persons={persons}
          filters={filters}
          onFilterChange={onFilterChange}
          onClearFilters={onClearFilters}
        />
      )}
      {showAddPerson && <AddPerson />}
      {!showSearchPersons && <Persons persons={persons} />}
    </>
  );
}

MainPage.defaultProps = {
  persons: [],
  filters: {
    name: '',
    gender: '',
    heightDownLimit: 0,
    heightUpLimit: 1000000,
  },
  showSearchPersons: false,
  showAddPerson: false,
  onSearchPersons: null,
  onAddPerson: null,
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
  filters: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    heightDownLimit: PropTypes.number,
    heightUpLimit: PropTypes.number,
  }),
  showSearchPersons: PropTypes.bool,
  showAddPerson: PropTypes.bool,
  onSearchPersons: PropTypes.func,
  onAddPerson: PropTypes.func,
  onFilterChange: PropTypes.func,
  onClearFilters: PropTypes.func,
};

export default MainPage;
