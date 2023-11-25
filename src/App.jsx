import { RegistroForm } from "./Components/RegistroForm/RegistroForm";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <ChakraProvider>
        <CSSReset/>
        <Header />
        <RegistroForm/>
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default App;
