import { useState } from "react";

export default function AddModal(props) {
  const { setShowAddModal, handleAddItemSubmit } = props;
  const [type, setType] = useState("");
  const [name, setName] = useState();
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8,
        background: "black",
      }}
    >
      <div
        style={{
          height: "20rem",
          width: "40rem",
          border: "1px solid black",
          background: "white",
          opacity: "1 !important",
          zIndex: 999,
        }}
      >
        <div
          style={{
            float: "right",
            cursor: "pointer",
            margin: "1rem",
            zIndex: 1000,
          }}
          onClick={() => setShowAddModal(false)}
        >
          X
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <select onChange={(e) => setType(e.target.value)}>
            <option value="" disabled selected>
              Select type
            </option>
            <option selected={type === "file"} key="file" value="file">
              File
            </option>
            <option selected={type === "folder"} key="folder" value="folder">
              Folder
            </option>
          </select>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            style={{
              marginLeft: "1rem",
            }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <button
            disabled={!name || !type}
            onClick={() => {
              handleAddItemSubmit({
                name,
                type,
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
