import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonDetailsPage from './components/PersonDetailsPage';
import MainPage from './components/MainPage';
import AddPersonPage from './components/AddPersonPage';

function App() {
  const defaultFilters = {
    name: '',
    gender: '',
    heightDownLimit: 0,
    heightUpLimit: 1000000,
  };

  const [persons, setPersons] = useState([]);
  const [showAddPerson, setShowAddPerson] = useState(false);
  const [showSearchPersons, setShowSearchPersons] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);

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

  const onSearch = () => {
    setShowSearchPersons(!showSearchPersons);
    setShowAddPerson(false);
  };

  const onAddPerson = () => {
    setShowAddPerson(!showAddPerson);
    setShowSearchPersons(false);
  };

  const onFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const onClearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                persons={persons}
                filters={filters}
                showSearchPersons={showSearchPersons}
                showAddPerson={showAddPerson}
                onSearch={onSearch}
                onAddPerson={onAddPerson}
                onFilterChange={onFilterChange}
                onClearFilters={onClearFilters}
              />
            }
          />

          <Route path="/person/:id" element={<PersonDetailsPage persons={persons} />} />
          <Route path="/person/add" element={<AddPersonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
