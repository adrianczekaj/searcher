import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonDetailsPage from './components/PersonDetailsPage';
import MainPage from './components/MainPage';
import AddPersonPage from './components/AddPersonPage';
import useFetch from './customHooks/useFetch';

function App() {
  const defaultFilters = {
    name: '',
    gender: '',
    heightDownLimit: 0,
    heightUpLimit: 300,
  };

  const persons = useFetch();
  const [showAddPerson, setShowAddPerson] = useState(false);
  const [showSearchPersons, setShowSearchPersons] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);

  const onSearchPersons = () => {
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
                onSearchPersons={onSearchPersons}
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
