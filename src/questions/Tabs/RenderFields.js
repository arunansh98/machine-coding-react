import Text from "./Text.js";
import Password from "./Password.js";
import Number from "./Number.js";
import "./RenderFields.css";

export default function RenderFields({ fields, tabIndex }) {
  return (
    <div className="fields">
      {fields?.map((field, index) => {
        switch (field.type) {
          case "text":
            return <Text key={index} field={field} tabIndex={tabIndex} />;
          case "number":
            return <Number key={index} field={field} tabIndex={tabIndex} />;
          case "password":
            return <Password key={index} field={field} tabIndex={tabIndex} />;
        }
      }) || "No fields present !"}
    </div>
  );
}
