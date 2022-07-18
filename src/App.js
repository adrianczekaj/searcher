import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Search from "./components/Search";
import Persons from "./components/Persons";
import PersonDetails from "./components/PersonDetails";

function App() {
    const [persons, setPersons] = useState(
        [
            {
                id: 1,
                name: 'Piotr',
                gender: 'man',
                height: 145,
            },
            {
                id: 2,
                name: 'Krzysztof',
                gender: 'man',
                height: 183,
            },
            {
                id: 3,
                name: 'Anna',
                gender: 'woman',
                height: 187,
            },
            {
                id: 4,
                name: 'Tomasz',
                gender: 'man',
                height: 180,
            },
            {
                id: 5,
                name: 'Paweł',
                gender: 'man',
                height: 180,
            },
            {
                id: 6,
                name: 'Agnieszka',
                gender: 'woman',
                height: 156,
            },
            {
                id: 7,
                name: 'Michał',
                gender: 'man',
                height: 180,
            },
            {
                id: 8,
                name: 'Marcin',
                gender: 'man',
                height: 170,
            },
            {
                id: 9,
                name: 'Jakub',
                gender: 'man',
                height: 165,
            },
            {
                id: 10,
                name: 'Adam',
                gender: 'man',
                height: 194,
            },
            {
                id: 11,
                name: 'Andrzej',
                gender: 'man',
                height: 172,
            },
            {
                id: 12,
                name: 'Katarzyna',
                gender: 'woman',
                height: 180,
            },
            {
                id: 13,
                name: 'Maria',
                gender: 'woman',
                height: 170,
            },
            {
                id: 14,
                name: 'Małgorzata',
                gender: 'woman',
                height: 143,
            },
            {
                id: 15,
                name: 'Jan',
                gender: 'man',
                height: 168,
            },
            {
                id: 16,
                name: 'Barbara',
                gender: 'woman',
                height: 143,
            },
            {
                id: 17,
                name: 'Ewa',
                gender: 'woman',
                height: 167,
            },
            {
                id: 18,
                name: 'Magdalena',
                gender: 'woman',
                height: 175,
            },
            {
                id: 19,
                name: 'Elżbieta',
                gender: 'woman',
                height: 172,
            },
            {
                id: 20,
                name: 'Krystyna',
                gender: 'woman',
                height: 173,
            }
        ]);

    const [showSearchPersons, setShowSearchPerson] = useState(false);

    return (
        <Router>
            <div className="container">

                <Routes>
                    <Route path="/" element={
                        <>
                            <Header title="List of persons" onSearch={() => setShowSearchPerson(!showSearchPersons)}
                                    showSearch={showSearchPersons} />
                            {showSearchPersons ? <Search persons={persons} /> : <Persons persons={persons} />}
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
