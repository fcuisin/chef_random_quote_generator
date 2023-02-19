import {
  Blockquote,
  Button,
  Container,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";

import Norbert from "./assets/norbert.png";

function App() {
  const [quote, setQuote] = useState(null);

  const handleGetQuote = async () => {
    try {
      const res = await fetch("/quote");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    handleGetQuote();
  }, []);

  return (
    <Container fluid p={0} mt="lg">
      <Image src={Norbert} height={200} fit="contain" />
      <Paper shadow="xs" py={80} px={40} radius="xl" className="quote-wrapper">
        <Stack align="center" spacing="md">
          <Title order={1}>Les phrases cultes de Nobert</Title>
          <Blockquote cite={quote?.context}>
            <Text size="xl" color="white">
              {quote?.quote}
            </Text>
          </Blockquote>

          <Button size="lg" radius="lg" onClick={() => handleGetQuote()}>
            Une autre !
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
