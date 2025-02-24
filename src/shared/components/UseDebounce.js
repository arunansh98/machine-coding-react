import { useEffect } from "react";

function UseDebounce(dependencyArray, callbackFunction, delay) {
  useEffect(() => {
    const timer = setTimeout(callbackFunction, delay);
    return () => clearTimeout(timer);
  }, dependencyArray);
}

export { UseDebounce };
