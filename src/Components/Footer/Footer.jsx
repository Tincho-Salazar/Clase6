import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      bg="#2B2A4C"
      color="#aaccee"
      position="sticky"
      w="full"
      boxShadow="dark-lg"
      p="10px"
      alignItems="center"
    >
      <Text color="white" fontSize="sm" textAlign='center'>
        © {currentYear} Luis Salazar. Todos los derechos reservados.
      </Text>
    </Box>
  );
};

export { Footer };
