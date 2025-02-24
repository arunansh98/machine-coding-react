export default function DropDown(props) {
  const { options, handleChange, activeIndex, label } = props;
  return (
    <div className="dropdown">
      <h2>{label}</h2>
      <select onChange={(e) => handleChange(e.target.value)}>
        {options.map((option, index) => (
          <option selected={activeIndex === index} key={index} value={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
