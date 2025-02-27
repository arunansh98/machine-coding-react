import { useState } from "react";
import PreviewModal from "./PreviewModal";
import "./FileUploadPage.css";

export default function FileUploadPage() {
  const [files, setFiles] = useState([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  console.log({ files });

  const handleDeleteFile = (deleteFileIndex) => {
    const filteredFiles = files.filter(
      (_file, index) => index !== deleteFileIndex
    );
    setFiles(filteredFiles);
  };

  return (
    <>
      <div className="file-upload-page">
        <div className="file-upload-container">
          <span
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Upload File
          </span>
          <input
            className="file-input"
            type="file"
            multiple={true}
            accept="image/*"
            onChange={(e) => {
              const targetFiles = Array.from(e.target.files);
              setFiles((prev) => [...prev, ...targetFiles]);
            }}
          />
        </div>
        <div className="file-preview-container">
          {files.map((file, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                onClick={() => handleDeleteFile(index)}
                className="file-delete-button"
              >
                X
              </span>
              <span>
                Name :
                <b
                  style={{
                    marginLeft: "0.3rem",
                  }}
                >
                  {file.name}
                </b>{" "}
              </span>
              <span style={{ marginLeft: "1rem" }}>
                Size :{" "}
                <b
                  style={{
                    marginLeft: "0.3rem",
                  }}
                >
                  {file.size} bytes
                </b>
              </span>
              <img
                onClick={() => {
                  setPreviewImageUrl(URL.createObjectURL(file));
                  setShowPreviewModal(true);
                }}
                className="preview-image-button"
                src="https://media.istockphoto.com/id/845329690/vector/eye-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=1SnGiyGCXd83V7m2hX0EsghFSqtmApJ6Qyy2b8Y3L1k="
                alt="eye-icon"
              />
            </div>
          ))}
        </div>
        {showPreviewModal && (
          <PreviewModal
            previewImageUrl={previewImageUrl}
            setShowPreviewModal={setShowPreviewModal}
          />
        )}
      </div>
    </>
  );
}
