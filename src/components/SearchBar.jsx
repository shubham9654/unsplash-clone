const SearchBar = ({ whenSubmit }) => {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault()
              whenSubmit(e.target.value)
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
