import React, { useState } from 'react'
import {
  Box,
  Flex,
  Container,
  useDisclosure,
} from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Carousel from './components/Carousel'

function App() {
  const { isOpen, onToggle } = useDisclosure()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNavigate = (index) => {
    setCurrentIndex(index)
  }

  return (
    <Flex minH="100vh" bg="white">
      <Sidebar
        isOpen={isOpen}
        onToggle={onToggle}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />
      <Box
        flex="1"
        ml={{ base: 0, lg: '250px' }}
        transition="margin-left 0.3s"
      >
        <Container maxW="container.xl" px={{ base: 6, md: 4 }} pt={{ base: 16, md: 8 }} pb={{ base: 12, md: 8 }}>
          <Carousel currentIndex={currentIndex} onNavigate={handleNavigate} />
        </Container>
      </Box>
    </Flex>
  )
}

export default App

