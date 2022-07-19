import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Search from "./components/Search";
import Persons from "./components/Persons";
import PersonDetails from "./components/PersonDetails";

function App() {

    const defaultFilters = {
        "name": "",
        "gender": "",
        "heightDownLimit": 0,
        "heightUpLimit": 300,
    }

    const [persons, setPersons] = useState([]);
    const [showSearchPersons, setShowSearchPerson] = useState(false);
    const [filters, setFilters] = useState(defaultFilters)

    useEffect(()=>{
        const getPersons = async () => {
            const personsFromServer = await fetchPersons()
            setPersons(personsFromServer)
        }

        getPersons()
    }, [])

    const fetchPersons = async () => {
        const res = await fetch('http://localhost:5000/persons')
        return await res.json()
    }

    const onFilterChange = (e) => {
        setFilters({
            ...filters,
        [e.target.name]: e.target.value})
    }

    const onClearFilters = () => {
        setFilters(defaultFilters)
    }

    return (
        <Router>
            <div className="container">

                <Routes>
                    <Route path="/" element={
                        <>
                            <Header title="List of persons" onSearch={() => setShowSearchPerson(!showSearchPersons)}
                                    showSearch={showSearchPersons} />
                            {showSearchPersons ? <Search persons={persons} filters={filters} onChange={onFilterChange} onClick={onClearFilters}/> : <Persons persons={persons}/>}
                        </>
                    } />

                    <Route path="/person/:id" element={
                        <>
                            <Header title="Person" showSearch={showSearchPersons} persons={persons}/>
                            <PersonDetails persons={persons}/>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
