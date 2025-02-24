import { useEffect, useState } from "react";

export default function ProgressBar({ progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  let width = animatedProgress + "%";
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          //   width,
          color: "white",
          transform: `translateX(${animatedProgress - 100}%)`,
          textAlign: "right",
          transition: "0.5s ease-in",
        }}
      >
        {width}
      </div>
    </div>
  );
}
