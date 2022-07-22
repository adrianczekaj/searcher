import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function Header({ title, onSearch, showSearch }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <button type="button" className="btn" onClick={onSearch}>
          {showSearch ? 'Hide filters' : 'Show filters'}
        </button>
      )}
    </header>
  );
}

Header.defaultProps = {
  title: 'List of persons',
  showSearch: false,
  onSearch: null,
};

Header.propTypes = {
  title: PropTypes.string,
  showSearch: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default Header;
