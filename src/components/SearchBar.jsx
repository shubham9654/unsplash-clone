import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = ({ whenSubmit }) => {
  const [text, setText] = useState();
  const [value] = useDebounce(text, 1000);


  useEffect(() => {
    whenSubmit(value)
  }, [value])
  
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault()
              setText(e.target.value)
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
