import { Blockquote, Container } from "@mantine/core";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/time");
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        return error;
      }
    })();
  }, []);
  return (
    <Container fluid>
      <Blockquote cite={quote?.context}>{quote?.quote}</Blockquote>
    </Container>
  );
}

export default App;
