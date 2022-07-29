import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import useFetch from '../customHooks/useFetch';
import Alert from './Alert';
import Persons from './Persons';

function AddPerson() {
  const defaultPerson = {
    id: 0,
    name: '',
    gender: '',
    height: 0,
  };
  const [person, setPerson] = useState(defaultPerson);
  const [text, setText] = useState('');
  const [showWindow, setShowWindow] = useState(false);
  const [classShow, setClassShow] = useState('alert-container');
  const persons = useFetch();

  useEffect(() =>
    showWindow ? setClassShow('alert-container show') : setClassShow('alert-container'),
  );

  const onFormChange = (e) => {
    const { name, value } = e.target;
    const properValue = Number.isNaN(parseInt(value, 10)) ? value : parseInt(value, 10);
    setPerson({ ...person, [name]: properValue });
  };

  const displayAlert = ({ message }) => {
    setText(message);
    setShowWindow(true);
  };

  const onAlert = () => {
    setShowWindow(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Number.isNaN(Number(person.height))) {
      displayAlert({ message: 'Height must be a number.' });
    } else if (person.height > 272) {
      displayAlert({
        message:
          "I can't believe adding person is so tall :) The tallest human was 272 cm. If you need bigger number give the information to the developer.",
      });
    } else if (person.name === '') {
      displayAlert({ message: "Name can't be empty." });
    } else {
      axios.post('http://localhost:5000/persons', person);

      setPerson(defaultPerson);
    }
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <Alert text={text} alertClasses={classShow} onAlert={onAlert} />
        <div className="form-control">
          <label htmlFor="personName">Name</label>
          <input
            id="personName"
            type="text"
            name="name"
            value={person.name}
            onChange={onFormChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="personGender">Gender</label>
          <select id="personGender" name="gender" value={person.gender} onChange={onFormChange}>
            <option>&#32;</option>
            <option>woman</option>
            <option>man</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="personHeight">Height</label>
          <input
            type="text"
            name="height"
            value={person.height === 0 ? '' : person.height}
            onChange={onFormChange}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Add person" />
      </form>
      <Persons persons={persons} />
    </>
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
