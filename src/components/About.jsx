import React from 'react'
import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  Button,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from 'react-icons/fa'

function About() {
  const primaryColor = useColorModeValue('primary.500', 'primary.400')

  return (
    <Box id="about" py={{ base: 8, md: 16 }}>
      <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={5}>
        Eric{' '}
        <Text as="span" color={primaryColor}>
          Kim
        </Text>
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }} mb={5} color="gray.600">
        Availability: August 2026 · MA & NJ · (201) 417-9314 ·{' '}
        <Link href="mailto:kim.eric3@northeastern.edu" color={primaryColor}>
          kim.eric3@northeastern.edu
        </Link>
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} mb={5} lineHeight="tall">
        Hello! I'm Eric Kim, a fourth-year Computer Science student at
        Northeastern University with a strong focus on DevOps, Site-Reliability
        Engineering and Full-Stack Development. My goal is to leverage my skills
        in both front-end and back-end technologies to create innovative software
        solutions.
        <br />
        <br />
        I bring hands-on experience from a year-long internship at ChefMod,
        where I refined my front-end development skills and contributed to
        impactful projects, including the Crypto Pairs Trading system. This
        role, combined with my academic training and personal projects, has
        given me a solid foundation in building and optimizing complex
        applications.
        <br />
        <br />
        Currently, I serve as the Explorer Series Director at Oasis, a student
        club dedicated to helping newcomers build their first website or app. In
        this role, I've revamped our curriculum to better integrate with other
        Computer Science clubs at Northeastern, offering resources and guidance
        for both beginners and those looking to deepen their understanding of
        front-end development tools and libraries.
        <br />
        <br />
        I'm eager to bring my skills and passion to a dynamic development team.
        Let's connect and explore how we can work together!
      </Text>
      <Text mb={4}>
        Fun Fact: The Blue displayed on this page is Pantone's 2020 Color of
        the Year,{' '}
        <Link
          href="https://www.pantone.com/articles/color-of-the-year/color-of-the-year-2020?srsltid=AfmBOopmk6tfYw9Nzk1fIDQX8x9lsg47DtHRV_E82JjS6uKJO_n0Lc2U"
          target="_blank"
          rel="noopener noreferrer"
          color={primaryColor}
        >
          Classic Blue
        </Link>
        !
      </Text>
      <HStack spacing={{ base: 2, md: 4 }} mt={6} flexWrap="wrap">
        {/* Mobile: IconButton (centered icon) */}
        <IconButton
          as="a"
          href="https://linkedin.com/in/eric-wj-kim"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaLinkedin />}
          aria-label="LinkedIn"
          size="sm"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "inline-flex", md: "none" }}
        />
        {/* Desktop: Button (icon + text) */}
        <Button
          as="a"
          href="https://linkedin.com/in/eric-wj-kim"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<FaLinkedin />}
          size="lg"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "none", md: "inline-flex" }}
        >
          LinkedIn
        </Button>

        <IconButton
          as="a"
          href="https://github.com/eruuc"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaGithub />}
          aria-label="GitHub"
          size="sm"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "inline-flex", md: "none" }}
        />
        <Button
          as="a"
          href="https://github.com/eruuc"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<FaGithub />}
          size="lg"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "none", md: "inline-flex" }}
        >
          GitHub
        </Button>

        <IconButton
          as="a"
          href="mailto:kim.eric3@northeastern.edu"
          icon={<FaEnvelope />}
          aria-label="Email"
          size="sm"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "inline-flex", md: "none" }}
        />
        <Button
          as="a"
          href="mailto:kim.eric3@northeastern.edu"
          leftIcon={<FaEnvelope />}
          size="lg"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "none", md: "inline-flex" }}
        >
          Email
        </Button>

        <IconButton
          as="a"
          href="assets/EricKimResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaFile />}
          aria-label="Resume"
          size="sm"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "inline-flex", md: "none" }}
        />
        <Button
          as="a"
          href="assets/EricKimResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<FaFile />}
          size="lg"
          colorScheme="blue"
          variant="outline"
          _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
          display={{ base: "none", md: "inline-flex" }}
        >
          Resume
        </Button>
      </HStack>
    </Box>
  )
}

export default About

