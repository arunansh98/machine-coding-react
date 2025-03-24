import { useEffect, useState } from "react";
import "./QuotesPage.css";

export default function QuotesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const json = await response.json();
    setQuotes((prev) => [...prev, json[0]]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const renderedQuotes = quotes.map((quote) => (
    <div className="quote">
      <h1>
        <span className="author">Author: </span>
        {quote.author}
      </h1>
      <h2>{quote.content}</h2>
    </div>
  ));

  if (isLoading) {
    return <div className="loading">Loading ...</div>;
  }

  const handleLoadMore = () => {
    setIsLoading(true);
    fetchQuotes();
  };

  return (
    <div className="quotes">
      {renderedQuotes}
      <div className="load-more-container">
        <button className="load-more-btn" onClick={() => handleLoadMore()}>
          Load More Quotes
        </button>
      </div>
    </div>
  );
}
