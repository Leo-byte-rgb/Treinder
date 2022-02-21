import { useState } from "react";
import { Home } from "./pages/Home";
import { UserSignUp } from "./pages/UserSignUp";
import { TrainerSignUp } from "./pages/TrainerSignUp";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <TrainerSignUp />
    </ChakraProvider>
  );
}

export default App;
