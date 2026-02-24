import './general.css';

function SearchBar({title, setTitle}) {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Search Movies"
      className="search-bar"
    </>
  );
}

export default SearchBar;
