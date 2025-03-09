const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Пошук:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Пошук за ім'ям"
      />
    </div>
  );
};

export default SearchBox;
