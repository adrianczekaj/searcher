import React from 'react';
import Header from "./Header";
import PersonDetails from "./PersonDetails";
import { useParams } from "react-router-dom";

const PersonDetailsPage = ({persons}) => {
    const {id} = useParams();
    const person = persons.find(x => x.id === parseInt(id));

    return (
        <>
            <Header title={person.name} />
            <PersonDetails person={person} />
        </>
    );
};

export default PersonDetailsPage;