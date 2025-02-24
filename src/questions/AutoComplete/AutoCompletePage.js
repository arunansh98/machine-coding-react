import { useCallback, useState } from "react";
import "./AutoCompletePage.css";
import { UseDebounce } from "../../shared/components/UseDebounce";
import AutoComplete from "./AutoComplete";

export default function AutoCompletePage() {
  const [recipe, setRecipe] = useState("");

  const [options, setOptions] = useState([]);

  const [cache, setCache] = useState({});

  const searchRecipes = useCallback(async () => {
    if (recipe) {
      // caching logic | performance optimization
      if (cache[recipe]) {
        setOptions(cache[recipe]);
      } else {
        const response = await fetch(
          "https://dummyjson.com/recipes/search?q=" + recipe
        );
        const json = await response.json();
        handleAutoCompleteOptions(json.recipes);
      }
    } else {
      setOptions([]);
    }
  }, [recipe]);

  // debouncing logic | performance optimization
  UseDebounce([recipe], searchRecipes, 200);

  const handleAutoComplete = (e) => {
    setRecipe(e.target.value);
  };

  const handleAutoCompleteOptions = (recipes) => {
    const newOptions =
      recipes && recipes.length > 0
        ? recipes.map((recipe) => ({
            key: recipe.id,
            value: recipe.name,
          }))
        : [];
    setOptions(newOptions);
    setCache((prev) => ({
      ...prev,
      [recipe]: newOptions,
    }));
  };

  return (
    <div className="auto-complete">
      <AutoComplete
        placeholder="Enter recipes"
        value={recipe}
        onChange={(e) => handleAutoComplete(e)}
        options={options}
      />
    </div>
  );
}
