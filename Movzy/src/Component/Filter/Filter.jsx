import "./Filter.css";
const Filter = ({ onFilterChange, type }) => {
  const movieOptions = ["popular", "top_rated", "upcoming", "trending"];
  const tvOptions = [
    "popular",
    "top_rated",
    "on_the_air",
    "airing_today",
    "trending",
  ];
  const options = type === "tv" ? tvOptions : movieOptions;

  return (
    <div className="option-bar">
      {options.map((option) => (
        <button
          key={option}
          className="option-btn"
          onClick={() => onFilterChange(option)}>
          {option.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </button>
      ))}
    </div>
  );
};

export default Filter;
