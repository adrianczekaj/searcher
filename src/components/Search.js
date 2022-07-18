import React, { useMemo } from 'react';
import Persons from "./Persons";

const Search = ({persons, filters, onChange}) => {

    const filteredPersons = useMemo(() => persons
            .filter(x => x.name.substring(0, filters.name.length).toLowerCase() === filters.name.toLowerCase())
            .filter(x => x.height >= filters.heightDownLimit)
            .filter(x => x.height <= filters.heightUpLimit)
            .filter(x => (filters.gender === '' ? x : x.gender === filters.gender)),
        [persons, filters.name, filters.heightDownLimit, filters.heightUpLimit, filters.gender]);

    return (
        <>
            <div className="add-form">
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name="name" value={filters.name} onChange={onChange} />
                </div>
                <div className="form-control">
                    <label>Gender</label>
                    <select name="gender" value={filters.gender} onChange={onChange}>
                        <option></option>
                        <option>woman</option>
                        <option>man</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Height</label>
                    <input type="text" name="heightDownLimit" value={filters.heightDownLimit === 0 ? '' : filters.heightDownLimit}
                           onChange={onChange} />
                    <label> - </label>
                    <input type="text" name="heightUpLimit" value={filters.heightUpLimit === 300 ? '' : filters.heightUpLimit}
                           onChange={onChange} />
                </div>
            </div>
            <Persons persons={filteredPersons} />
        </>
    );
}

export default Search;