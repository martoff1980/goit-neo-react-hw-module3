import './SearchBox.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-box">
      <label>
        Find contacts by name:
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
