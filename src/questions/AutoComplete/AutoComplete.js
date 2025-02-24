import { useRef, useState } from "react";
import "./AutoComplete.css";

export default function AutoComplete(props) {
  const { value, onChange, placeholder, options } = props;
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const autoCompleteRef = useRef();

  return (
    <div style={{ width: "fit-content", position: "relative" }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setShowAutoComplete(true)}
        onBlur={() => setShowAutoComplete(false)}
        ref={autoCompleteRef}
      />
      {showAutoComplete && options && options.length > 0 && (
        <div className="auto-complete-options">
          {options.map((option) => (
            <div
              key={option.id}
              style={{
                border: "1px solid black",
              }}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
