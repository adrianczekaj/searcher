import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddPerson() {
  const defaultPerson = {
    id: 0,
    name: '',
    gender: '',
    height: 0,
  };
  const [person, setPerson] = useState(defaultPerson);
  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    const res = await fetch('http://localhost:5000/persons');
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getPersons = async () => {
      const personsFromServer = await fetchPersons();
      setPersons(personsFromServer);
    };

    getPersons();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Number.isNaN(Number(person.height))) {
      alert('Height must be a number.');
    } else if (person.height > 272) {
      alert('The tallest human had 272 cm. If you are taller give the information to developer :)');
    } else if (person.name === '') {
      alert("Name can't be empty.");
    } else {
      const res = await fetch('http://localhost:5000/persons', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(person),
      });

      const data = await res.json();
      setPersons([...persons, data]);
      setPerson(defaultPerson);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const properValue = Number.isNaN(parseInt(value, 10)) ? value : parseInt(value, 10);
    setPerson({ ...person, [name]: properValue });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="personName">Name</label>
        <input id="personName" type="text" name="name" value={person.name} onChange={onChange} />
      </div>
      <div className="form-control">
        <label htmlFor="personGender">Gender</label>
        <select id="personGender" name="gender" value={person.gender} onChange={onChange}>
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
          onChange={onChange}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Add person" />
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
