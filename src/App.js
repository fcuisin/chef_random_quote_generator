import {
  Anchor,
  Blockquote,
  Button,
  Container,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useCallback, useEffect, useState } from "react";

import Norbert from "./assets/norbert.png";
import Etchebest from "./assets/philippe-etchebest.png";

const authors = ["Norbert Tarayre", "Philippe Etchebest"];

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(authors.at(0));

  const fetchQuote = useCallback(async () => {
    const cleanName = author.toLowerCase().replaceAll(" ", "_");
    try {
      const res = await fetch(`/quote/${cleanName}`);
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      return error;
    }
  }, [author]);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <Container fluid p={0} mt="lg">
      <Image
        src={author === "Norbert Tarayre" ? Norbert : Etchebest}
        height={200}
        fit="contain"
      />
      <Paper shadow="xs" py={80} px={40} radius="xl" className="quote-wrapper">
        <Stack align="center" spacing="md">
          <Title order={1}>Les phrases cultes de {author}</Title>
          <Blockquote cite={`${quote?.context} - ${quote?.year}`}>
            <Text size="xl" color="white">
              {quote?.quote}
            </Text>
          </Blockquote>

          <Button size="lg" radius="lg" onClick={() => fetchQuote()}>
            Une autre !
          </Button>
          <Anchor
            color="gray"
            underline={false}
            onClick={() =>
              setAuthor(authors.filter((el) => el !== author).join())
            }
          >
            Je préfère {authors.filter((el) => el !== author).join()}
          </Anchor>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
