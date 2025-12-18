import React from 'react'
import {
  Box,
  Heading,
  Card,
  CardBody,
  Flex,
  Text,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    name: 'Crypto Pairs Trading Program',
    github: 'https://github.com/eruuc/crypto-pairs-trading',
    description: [
      '▪ Developed a Python-based backtesting system for cryptocurrency pairs, using Pandas to analyze historical data and generate buy/sell signals for optimized trading decisions',
      '▪ Led Agile sprints and organized tasks using a Kanban board, fostering a collaborative environment and ensuring efficient project management and task tracking',
      '▪ Scraped up-to-date Yahoo Finance cryptocurrency data to collect and refine market data, enhancing the accuracy of the Pairs Trading algorithm through iterative backtesting and performance tuning',
    ],
  },
  {
    name: 'Spotify Song Sorter',
    github: 'https://github.com/eruuc/song-sorter',
    description: [
      "▪ Designing a sorting algorithm in ReactJS to algorithmically display songs from a user-selected artist to determine the user's ranking of their discography based on the decisions of each pair of songs displayed to the use",
      '▪ Performing RESTful API calls to the Spotify Web API in order to fetch artist data and store various identifying information about their discography including the albums and their tracklists',
    ],
  },
]

function Projects() {
  const primaryColor = useColorModeValue('primary.500', 'primary.400')

  return (
    <Box id="projects" py={{ base: 8, md: 16 }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8}>
        Projects
      </Heading>
      <Box>
        {projects.map((project, index) => (
          <Card
            key={index}
            mb={4}
            boxShadow="md"
            borderRadius="xl"
            borderWidth="1px"
          >
            <CardBody>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                gap={4}
              >
                <Box flex="1">
                  <Heading as="h3" size="md" mb={2}>
                    {project.name}
                  </Heading>
                  {project.description.map((desc, i) => (
                    <Text key={i} mb={2} lineHeight="tall">
                      {desc}
                    </Text>
                  ))}
                </Box>
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<FaGithub />}
                  size={{ base: "xs", md: "sm" }}
                  colorScheme="blue"
                  variant="outline"
                  _hover={{ bg: 'primary.500', color: 'white', borderColor: 'primary.500' }}
                  alignSelf={{ base: 'flex-start', md: 'flex-start' }}
                  whiteSpace="nowrap"
                >
                  GitHub
                </Button>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Projects

