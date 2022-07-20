import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import PersonDetails from './PersonDetails';

function PersonDetailsPage({ persons }) {
  const { id } = useParams();
  const person = persons.find((x) => x.id === parseInt(id));

  return (
    <>
      <Header title={person.name} />
      <PersonDetails person={person} />
    </>
  );
}

export default PersonDetailsPage;
