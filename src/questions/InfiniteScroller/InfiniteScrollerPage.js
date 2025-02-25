import { useEffect, useState } from "react";
import "./InfiniteScrollerPage.css";

export default function InfiniteScrollerPage() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    console.log("calling api to fetch images !");
    const response = await fetch(
      "https://api.unsplash.com/photos/random?count=9&client_id=XtV7noD_ybObHGJefHTv1iJo25bBBktVIhqrDVHWnSY"
    );
    const json = await response.json();
    setImages((prevImages) => [
      ...prevImages,
      ...json.map((item) => item.urls.small),
    ]);
    console.log({ json });
  };

  let time = 0;

  const throttledFunction = (func, delay) => {
    return function (...args) {
      let now = Date.now();
      if (now - time >= delay) {
        func(...args);
        time = now;
      } else {
        return;
      }
    };
  };

  useEffect(() => {
    fetchImages();

    // Scroll event handler
    const handleScroll = throttledFunction(() => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        fetchImages();
      }
    }, 1000);

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log({ images });

  const renderedImages = images.map((image, index) => (
    <img className="scroller-image" src={image} key={index} alt={index} />
  ));

  return <div className="scroller">{renderedImages}</div>;
}
