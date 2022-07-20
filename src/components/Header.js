import { useLocation } from 'react-router-dom';

function Header({ title, onSearch, showSearch }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/'
                && <button className="btn" onClick={onSearch}>{showSearch ? 'Hide filters' : 'Show filters'}</button>}
    </header>
  );
}

export default Header;
