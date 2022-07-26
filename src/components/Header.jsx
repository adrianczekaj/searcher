import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function Header({ title, onSearchPersons, showSearchPersons, onAddPerson, showAddPerson }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <div>
          <button type="button" className="btn" onClick={onAddPerson}>
            {showAddPerson ? 'Hide' : 'Add person'}
          </button>
          <div style={{ display: 'inline-block', margin: '5px' }} />
          <button type="button" className="btn" onClick={onSearchPersons}>
            {showSearchPersons ? 'Hide filters' : 'Show filters'}
          </button>
        </div>
      )}
    </header>
  );
}

Header.defaultProps = {
  title: 'List of persons',
  showSearchPersons: false,
  showAddPerson: false,
  onSearchPersons: null,
  onAddPerson: null,
};

Header.propTypes = {
  title: PropTypes.string,
  showSearchPersons: PropTypes.bool,
  showAddPerson: PropTypes.bool,
  onSearchPersons: PropTypes.func,
  onAddPerson: PropTypes.func,
};

export default Header;
