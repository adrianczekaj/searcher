import { useLocation, useParams } from "react-router-dom";

const Header = ({title, onSearch, showSearch, persons}) => {
    const location = useLocation();
    const {id} = useParams();
    const selectedPersonDetails = id !== undefined ? persons.find(x => x.id === parseInt(id)).name : title;

    return (
        <header className="header">
            <h1>{selectedPersonDetails}</h1>
            {location.pathname === '/' &&
                <button className="btn" onClick={onSearch}>{showSearch ? 'Hide filters' : 'Show filters'}</button>
            }
        </header>
    );
};

export default Header;