import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonDetailsPage from './components/PersonDetailsPage';
import SearchPage from './components/SearchPage';

function App() {
  const defaultFilters = {
    name: '',
    gender: '',
    heightDownLimit: 0,
    heightUpLimit: 300,
  };

  const [persons, setPersons] = useState([]);
  const [showSearchPersons, setShowSearchPersons] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);

  const fetchPersons = async () => {
    const res = await fetch('http://localhost:5000/persons');
    const resjson = await res.json();
    return resjson;
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
              <SearchPage
                persons={persons}
                showSearchPersons={showSearchPersons}
                onSearch={onSearch}
                filters={filters}
                onFilterChange={onFilterChange}
                onClearFilters={onClearFilters}
              />
            }
          />
          <Route path="/person/:id" element={<PersonDetailsPage persons={persons} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
