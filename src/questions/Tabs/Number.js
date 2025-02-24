import { useContext } from "react";
import { Context } from "./TabsPage";

export default function Number(props) {
  const { tabIndex, field } = props;
  const { id, placeholder, label } = field;
  const { state, dispatch } = useContext(Context);
  const value = state?.[tabIndex]?.[id];
  return (
    <div id="field">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        placeholder={placeholder}
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
