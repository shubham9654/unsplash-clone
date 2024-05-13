import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = ({ whenSubmit }) => {
  const [text, setText] = useState();
  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    whenSubmit(value)
  }, [value])

  return (
    <div className="ui segment" style={{ backgroundColor: "#000" }}>
      <form className="ui form" onSubmit={(e) => {
        e.preventDefault()
        setText(text)
      }}>
        <div className="field">
          <label className="input_label" style={{ color: "white" }}>Search Image</label>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault()
              setText(e.target.value)
            }}
            value={text}
            placeholder="Search any Image..."
            className="bg-black input_search"

          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
