import "./PreviewModal.css";

export default function PreviewModal(props) {
  const { previewImageUrl, setShowPreviewModal } = props;
  return (
    <div className="main-container">
      <div className="secondary-container">
        <div className="image-preview-container">
          <img
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
            src={previewImageUrl}
            alt="preview-image"
          />
          <span
            onClick={() => setShowPreviewModal(false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
}
