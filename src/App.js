import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonDetailsPage from './components/PersonDetailsPage';
import SearchPage from './components/SearchPage';

function App() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const getPersons = async () => {
            const personsFromServer = await fetchPersons();
            setPersons(personsFromServer);
        };

        getPersons();
    }, []);

    const fetchPersons = async () => {
        const res = await fetch('http://localhost:5000/persons');
        return await res.json();
    };

    const [showSearchPersons, setShowSearchPerson] = useState(false);

    const onSearch = () => {
        setShowSearchPerson(!showSearchPersons);
    };

    const defaultFilters = {
        name: '',
        gender: '',
        heightDownLimit: 0,
        heightUpLimit: 300,
    };

    const [filters, setFilters] = useState(defaultFilters);

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
                        element={(
                            <SearchPage
                                persons={persons}
                                showSearchPersons={showSearchPersons}
                                onSearch={onSearch}
                                filters={filters}
                                onFilterChange={onFilterChange}
                                onClearFilters={onClearFilters}
                            />
                        )}
                    />

                    <Route
                        path="/person/:id"
                        element={
                            <PersonDetailsPage persons={persons} />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
