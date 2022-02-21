import { useState } from "react";
import { Home } from "./pages/Home";
import { UserSignUp } from "./pages/UserSignUp";
import { TrainerSignUp } from "./pages/TrainerSignUp";
import { UserSignIn } from "./pages/UserSignIn";

import { Trainers } from "./pages/Trainers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/auth";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserSignIn />} />
            <Route path="/trainer-signup" element={<TrainerSignUp />} />
            <Route path="/user-signup" element={<UserSignUp />} />
            <Route path="/trainers" element={<Trainers />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
