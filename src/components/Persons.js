import Person from './Person';

function Persons({ persons }) {
  return (
    <div>
      {persons.map((person, index) => (<Person key={person.id} number={index} person={person} />))}
    </div>
  );
}

export default Persons;
