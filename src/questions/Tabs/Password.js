import { useContext } from "react";
import { Context } from "./TabsPage";

export default function Text(props) {
  const { tabIndex, field } = props;
  const { id, placeholder } = field;
  const { state, dispatch } = useContext(Context);
  const value = state?.[tabIndex]?.[id];
  return (
    <div id="field">
      <label>{field.label}</label>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={(event) =>
          dispatch({
            type: "updateFieldValue",
            payload: {
              tabIndex,
              id,
              value: event.target.value,
            },
          })
        }
      />
    </div>
  );
}
