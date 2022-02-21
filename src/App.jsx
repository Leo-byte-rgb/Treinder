import { useState } from "react";
import { Home } from "./pages/Home";
import { UserSignUp } from "./pages/UserSignUp";
import { TrainerSignUp } from "./pages/TrainerSignUp";
import { Trainers } from "./pages/Trainers";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Trainers />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
