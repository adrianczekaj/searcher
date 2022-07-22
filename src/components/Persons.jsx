import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

function Persons({ persons }) {
  return (
    <div>
      {persons.map((person, index) => (
        <Person key={person.id} number={index} person={person} />
      ))}
    </div>
  );
}

Persons.defaultProps = {
  persons: [],
};

Persons.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      gender: PropTypes.string,
      height: PropTypes.number,
    }),
  ),
};

export default Persons;
