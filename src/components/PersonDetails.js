import React from 'react';
import { Link, useParams } from 'react-router-dom'

const PersonDetails = ({persons}) => {
    const {id} = useParams();
    const person = persons.find(x => x.id === parseInt(id));

    return (
        <>
            <div className="person-details">
                <div className="person-details-item">
                    <div>Id</div>
                    <div>{id}</div>
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

            <Link className="btn" to="/">Back</Link>
        </>
    );
};

export default PersonDetails;