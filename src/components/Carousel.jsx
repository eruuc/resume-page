import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import About from './About'
import Experience from './Experience'
import Leadership from './Leadership'
import Projects from './Projects'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'

const sections = [
  { id: 'about', component: About, label: 'About' },
  { id: 'experience', component: Experience, label: 'Experience' },
  { id: 'leadership', component: Leadership, label: 'Leadership' },
  { id: 'projects', component: Projects, label: 'Projects' },
  { id: 'education', component: Education, label: 'Education' },
  { id: 'skills', component: Skills, label: 'Skills' },
  { id: 'interests', component: Interests, label: 'Interests' },
]

function Carousel({ currentIndex, onNavigate }) {
  const primaryColor = useColorModeValue('primary.500', 'primary.400')
  const CurrentComponent = sections[currentIndex].component

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        const newIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1
        onNavigate(newIndex)
      } else if (e.key === 'ArrowRight') {
        const newIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1
        onNavigate(newIndex)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, onNavigate])

  return (
    <Box position="relative" minH={{ base: "calc(100vh - 150px)", md: "calc(100vh - 200px)" }}>
      {/* Current Section */}
      <Box
        key={currentIndex}
        maxW="100%"
        mx="auto"
        pb={{ base: 20, md: 0 }}
        animation="fadeIn 0.5s ease-in"
        sx={{
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateX(20px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
        }}
      >
        <CurrentComponent />
      </Box>

      {/* Navigation Controls: Previous, Dots Indicator, Next */}
      <Flex
        position="absolute"
        bottom={{ base: 2, md: 4 }}
        left="50%"
        transform="translateX(-50%)"
        align="center"
        gap={{ base: 2, md: 4 }}
        zIndex={10}
        flexWrap="wrap"
        justify="center"
        px={2}
      >
        <IconButton
          icon={<FaChevronLeft />}
          onClick={handlePrevious}
          aria-label="Previous section"
          bg={primaryColor}
          color="white"
          _hover={{ bg: 'primary.600' }}
          w={{ base: "24px", md: "30px" }}
          h={{ base: "24px", md: "30px" }}
          borderRadius="full"
          boxShadow="lg"
          size={{ base: "sm", md: "md" }}
        />
        <Flex gap={{ base: 1, md: 2 }} align="center" flexWrap="wrap" justify="center">
          {sections.map((section, index) => (
            <Button
              key={section.id}
              size="sm"
              w={{ base: "10px", md: "12px" }}
              h={{ base: "10px", md: "12px" }}
              p={0}
              minW={{ base: "10px", md: "12px" }}
              borderRadius="full"
              bg={index === currentIndex ? primaryColor : 'gray.300'}
              _hover={{ bg: index === currentIndex ? 'primary.600' : 'gray.400' }}
              onClick={() => onNavigate(index)}
              aria-label={`Go to ${section.label}`}
            />
          ))}
        </Flex>
        <IconButton
          icon={<FaChevronRight />}
          onClick={handleNext}
          aria-label="Next section"
          bg={primaryColor}
          color="white"
          _hover={{ bg: 'primary.600' }}
          w={{ base: "24px", md: "30px" }}
          h={{ base: "24px", md: "30px" }}
          borderRadius="full"
          boxShadow="lg"
          size={{ base: "sm", md: "md" }}
        />
      </Flex>
    </Box>
  )
}

export default Carousel

