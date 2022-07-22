import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Person({ person: { id, name, gender, height }, number }) {
  return (
    <div className="person">
      <div className="number">{number + 1}</div>
      <div className="name">{name}</div>
      <div className="gender">{gender}</div>
      <div className="height">{height}</div>
      <Link className="btn" to={`/person/${id}`}>
        Details
      </Link>
    </div>
  );
}

Person.defaultProps = {
  number: 0,
  person: {
    id: null,
    name: '',
    gender: '',
    height: null,
  },
};

Person.propTypes = {
  number: PropTypes.number,
  person: {
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
  },
};

export default Person;
