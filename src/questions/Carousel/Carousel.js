import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel(props) {
  const { images, activeImage, setActiveImage } = props;

  console.log({ images });

  const imageUrl = images?.[activeImage];

  const [timer, setTimer] = useState();

  const [animationClass, setAnimationClass] = useState("active");

  const handleArrowClick = (action) => {
    if (timer) {
      clearTimeout(timer);
    }
    let updatedImage = activeImage;

    setAnimationClass(action === "left" ? "slide-left" : "slide-right");

    switch (action) {
      case "left":
        updatedImage = updatedImage - 1;
        break;
      case "right":
        updatedImage = updatedImage + 1;
        break;
      default:
        throw new Error("No Action Matched !");
    }
    if (updatedImage >= images.length) {
      updatedImage = 0;
    }
    if (updatedImage < 0) {
      updatedImage = images.length - 1;
    }
    const newTimer = setTimeout(() => {
      setActiveImage(updatedImage);
      setAnimationClass("active");
    }, 300);
    setTimer(newTimer);
  };

  const arrowListener = (event) => {
    const key = event.key;
    switch (key) {
      case "ArrowLeft":
        console.log("Left arrow");
        handleArrowClick("left");
        break;
      case "ArrowRight":
        console.log("Right arrow");
        handleArrowClick("right");
        break;
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", arrowListener);
    return () => document.body.removeEventListener("keydown", arrowListener);
  }, [images, activeImage]);

  return (
    <div className="main">
      <div className="image-container">
        <img
          onClick={() => handleArrowClick("left")}
          className="left-arrow"
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
        />
        <img
          className={`image ${animationClass}`}
          key={activeImage}
          src={imageUrl}
          alt={activeImage}
        />
        <img
          onClick={() => handleArrowClick("right")}
          className="right-arrow"
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
        />
      </div>
    </div>
  );
}
