import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../style/index.css";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../style/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Theme>
        <App />
      </Theme>
    </ChakraProvider>
  </StrictMode>
);
