import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PersonDetails({ person }) {
  return (
    <>
      <div className="person-details">
        <div className="person-details-item">
          <div>Id</div>
          <div>{person.id}</div>
        </div>
        <div className="person-details-item">
          <div>gender</div>
          <div>{person.gender}</div>
        </div>
        <div className="person-details-item">
          <div>height</div>
          <div>{person.height}</div>
        </div>
      </div>

      <Link className="btn" to="/">
        Back
      </Link>
    </>
  );
}

PersonDetails.defaultProps = {
  person: {
    id: null,
    name: '',
    gender: '',
    height: null,
  },
};

PersonDetails.propTypes = {
  person: {
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
  },
};

export default PersonDetails;
