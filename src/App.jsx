import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonDetailsPage from './components/PersonDetailsPage';
import MainPage from './components/MainPage';
import useFetch from './customHooks/useFetch';

function App() {
  const defaultFilters = {
    name: '',
    gender: '',
    heightDownLimit: 0,
    heightUpLimit: 300,
  };

  const [showAddPerson, setShowAddPerson] = useState(false);
  const [showSearchPersons, setShowSearchPersons] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const persons = useFetch();

  const onAddPerson = () => {
    setShowAddPerson(!showAddPerson);
    setShowSearchPersons(false);
  };

  const onSearchPersons = () => {
    setShowSearchPersons(!showSearchPersons);
    setShowAddPerson(false);
  };

  const onFilterChange = (e) => {
    const { name, value } = e.target;
    const tryParseInt = parseInt(value, 10);
    const properValue = Number.isNaN(tryParseInt) ? value : tryParseInt;

    setFilters({
      ...filters,
      [name]: properValue,
    });
  };

  const onClearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <ChakraProvider>
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
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
