import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/time");
        const data = await res.json();
        setQuote(data.time);
      } catch (error) {
        return error;
      }
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{quote}</p>
      </header>
    </div>
  );
}

export default App;
