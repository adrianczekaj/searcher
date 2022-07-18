import React, { useMemo, useState } from 'react';
import Persons from "./Persons";

const Search = ({persons}) => {

    const [name, setName] = useState('');
    const [heightDownLimit, setHeightDownLimit] = useState(0);
    const [heightUpLimit, setHeightUpLimit] = useState(300);
    const [gender, setGender] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handleHeightDownLimitChange = (e) => {
        setHeightDownLimit(e.target.value)
    };

    const handleHeightUpLimitChange = (e) => {
        setHeightUpLimit(e.target.value === "" ? 300 : e.target.value)
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const filteredPersons = useMemo(() => persons
            .filter(x => x.name.substring(0, name.length).toLowerCase() === name.toLowerCase())
            .filter(x => x.height > heightDownLimit)
            .filter(x => x.height < heightUpLimit)
            .filter(x => (gender === '' ? x : x.gender === gender)),
        [persons, name, heightDownLimit, heightUpLimit, gender]);

    return (
        <>
            <div className="add-form">
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-control">
                    <label>Gender</label>
                    <select value={gender} onChange={handleGenderChange}>
                        <option></option>
                        <option>woman</option>
                        <option>man</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Height</label>
                    <input type="text" value={heightDownLimit === 0 ? '' : heightDownLimit}
                           onChange={handleHeightDownLimitChange} />
                    <label> - </label>
                    <input type="text" value={heightUpLimit === 300 ? '' : heightUpLimit}
                           onChange={handleHeightUpLimitChange} />
                </div>
            </div>
            <Persons persons={filteredPersons} />
        </>
    );
}

export default Search;