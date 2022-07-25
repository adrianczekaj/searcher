import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddPerson() {
  const [person, setPerson] = useState({
    id: 0,
    name: '',
    gender: '',
    height: 0,
  });

  const onSubmit = () => {
    console.log('id', person.id);
    console.log('name', person.name);
    console.log('gender', person.gender);
    console.log('height', person.height);
  };

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="personName">Name</label>
        <input id="personName" type="text" name="name" value={person.name} onChange={onChange} />
      </div>
      <div className="form-control">
        <label htmlFor="personGender">Gender</label>
        <select id="personGender">
          <option>&#32;</option>
          <option>woman</option>
          <option>man</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="personHeight">Height</label>
        <input type="text" />
      </div>
      <button className="btn btn-block" type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddPerson;

AddPerson.defaultProps = {
  person: {
    id: 0,
    name: '',
    gender: '',
    height: 0,
  },
};

AddPerson.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
  }),
};
