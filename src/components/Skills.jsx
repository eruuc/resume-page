import React from 'react'
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCheck, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaAngular } from 'react-icons/fa'

function Skills() {
  const iconColor = useColorModeValue('primary.500', 'primary.400')

  const skills = [
    { icon: FaJava, label: 'Java' },
    { icon: FaPython, label: 'Python' },
    { icon: FaHtml5, label: 'HTML5' },
    { icon: FaCss3Alt, label: 'CSS3' },
    { icon: FaReact, label: 'React' },
    { icon: FaAngular, label: 'Angular' },
  ]

  const workflows = [
    'Mobile-First, Responsive Design',
    'Cross Browser Testing & Debugging',
    'Cross Functional Teams',
    'Agile Development & Scrum',
  ]

  return (
    <Box id="skills" py={{ base: 8, md: 16 }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8}>
        Skills
      </Heading>
      <VStack align="stretch" spacing={6}>
        <Box>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={4} color="gray.600">
            Programming Languages & Tools
          </Text>
          <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Box key={index} fontSize={{ base: "3xl", md: "4xl" }} color={iconColor}>
                  <Icon />
                </Box>
              )
            })}
          </HStack>
        </Box>
        <Box>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={4} color="gray.600">
            Workflow
          </Text>
          <List spacing={3}>
            {workflows.map((workflow, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <ListIcon as={FaCheck} color={iconColor} />
                {workflow}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  )
}

export default Skills

