import React from 'react';
import {Link} from 'react-router-dom'

const Person = ({person}) => {
    const {id, name, gender, height} = person;

    return (
        <div className="person">
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <div className="gender">{gender}</div>
            <div className="height">{height}</div>
            <Link className="btn" to={`/person/${id}`}>Details</Link>
        </div>
    );
};

export default Person;