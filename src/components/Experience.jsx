import React from 'react'
import {
  Box,
  Heading,
  Card,
  CardBody,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const experiences = [
  {
    company: 'Medidata',
    title: 'DevOps Engineer Co-op',
    period: 'Feburary 2025 - August 2025',
    description: [
      '▪ Containerized four EC2-based jobs into a Dockerized EKS environment, reducing AWS costs',
      '▪ Built a GitHub Actions pipeline to convert vendor zip files into Debian and Docker artifacts for AWS ECR',
      '▪ Engineered multi-stage Dockerfiles to set up version-specific packages, shrinking image sizes by over 50%',
      '▪ Created architecture-specific (ARM & x86) packages for streamlined use of Docker images',
    ],
  },
  {
    company: 'IpserLab',
    title: 'Software Engineering Intern',
    period: 'May 2024 - August 2024',
    description: [
      "▪ Integrated a memoized query cache in React to reduce overall API call redundanc",
      '▪ Reconstructed the UncoverGem website while constructing test cases, conducting QA with staff and resolving website defects to improve overall system reliability before deploying',
    ],
  },
  {
    company: 'ChefMod',
    title: 'Front-End Software Engineering Intern',
    period: 'September 2021 - June 2022',
    description: [
      '▪ Overhauled the ChefMod mobile application using Ionic Framework in Angular and TypeScript that allowed 500+ users to communicate with distributors for up-to-date information on invoices and order history',
    ],
  },
]

function Experience() {
  const primaryColor = useColorModeValue('primary.500', 'primary.400')

  return (
    <Box id="experience" py={{ base: 8, md: 16 }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8}>
        Experience
      </Heading>
      <Box>
        {experiences.map((exp, index) => (
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
                    {exp.company}
                  </Heading>
                  <Text fontSize="md" fontWeight="semibold" mb={3} color="gray.600">
                    {exp.title}
                  </Text>
                  {exp.description.map((desc, i) => (
                    <Text key={i} mb={2} lineHeight="tall">
                      {desc}
                    </Text>
                  ))}
                </Box>
                <Text
                  color={primaryColor}
                  fontWeight="semibold"
                  whiteSpace={{ base: "normal", md: "nowrap" }}
                  alignSelf={{ base: 'flex-start', md: 'flex-start' }}
                >
                  {exp.period}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Experience

