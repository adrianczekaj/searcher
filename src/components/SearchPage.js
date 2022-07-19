import Header from "./Header";
import Search from "./Search";
import Persons from "./Persons";

const SearchPage = ({persons, showSearchPersons, onSearch, filters, onFilterChange, onClearFilters}) => {

    return (
        <>
            <Header title="List of persons" onSearch={onSearch}
                    showSearch={showSearchPersons} />
            {showSearchPersons ?
                <Search persons={persons} filters={filters} onFilterChange={onFilterChange}
                        onClearFilters={onClearFilters} /> :
                <Persons persons={persons} />}
        </>
    );
};

export default SearchPage;