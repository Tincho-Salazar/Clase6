import { Box, Container, Heading } from "@chakra-ui/react"

const Header = () => {
  return(
    <Box bg='#2B2A4C' color='#aaccee' position='sticky' w='full' boxShadow='dark-lg' p='10px' alignItems='center'>
      <Container textAlign='center'>
        <Heading>Practico Clase 6</Heading>
      </Container>
    </Box>
  )
};

export { Header };