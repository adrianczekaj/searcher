import React from 'react';
import { Link } from 'react-router-dom'

const PersonDetails = ({person}) => {

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

            <Link className="btn" to="/">Back</Link>
        </>
    );
};

export default PersonDetails;