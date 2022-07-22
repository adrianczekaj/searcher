import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Header from './Header';
import PersonDetails from './PersonDetails';

function PersonDetailsPage({ persons }) {
  const { id } = useParams();
  const person = persons.find((x) => x.id === parseInt(id, 10));

  return (
    <>
      <Header title={person.name} />
      <PersonDetails person={person} />
    </>
  );
}

PersonDetailsPage.defaultProps = {
  persons: [],
};

PersonDetailsPage.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      gender: PropTypes.string,
      height: PropTypes.number,
    }),
  ),
};

export default PersonDetailsPage;
