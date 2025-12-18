import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

function Interests() {
  return (
    <Box id="interests" py={{ base: 8, md: 16 }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8}>
        Interests
      </Heading>
      <Text mb={4} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
        Apart from Software Engineering, I am a big fan of video games. You
        might find me playing games like Valorant, Persona 5 Royal, or even
        Elden Ring.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
        I love listening to Tyler, the Creator!
      </Text>
    </Box>
  )
}

export default Interests

