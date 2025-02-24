import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "./CarouselPage.css";

export default function CarouselPage() {
  const [images, setImages] = useState([]);

  const [activeImage, setActiveImage] = useState(0);

  const fetchImages = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    const json = await response.json();
    setImages(json.map((image) => image.download_url));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container">
      <h2>Carousel Page</h2>
      <Carousel
        images={images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
}
