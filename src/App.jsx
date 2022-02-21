import { useState } from "react";
import { Home } from "./pages/Home";
import { UserSignUp } from "./pages/UserSignUp";
import { TrainerSignUp } from "./pages/TrainerSignUp";
import { UserSignIn } from "./pages/UserSignIn";

import { Trainers } from "./pages/Trainers";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import {AuthProvider} from "./hooks/auth";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <UserSignIn />

      </AuthProvider>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
