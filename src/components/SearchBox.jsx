const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBox;
