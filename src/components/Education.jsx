import React from 'react'
import {
  Box,
  Heading,
  Card,
  CardBody,
  Flex,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

const educations = [
  {
    school: 'Northeastern University',
    department: 'Khoury College of Computer Sciences',
    period: 'September 2022 - Present',
    details: [
      'Expected Graduation: April 2026',
      'Candidate for Bachelors of Science in Computer Science; Concentration in Software'
    ],
  },
  {
    school: 'Bergen County Academies',
    department: 'Academy for Technology and Computer Science',
    period: 'September 2018 - June 2022',
    details: [],
  },
]

function Education() {
  const primaryColor = useColorModeValue('primary.500', 'primary.400')

  return (
    <Box id="education" py={{ base: 8, md: 16 }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8}>
        Education
      </Heading>
      <Box>
        {educations.map((edu, index) => (
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
                    {edu.school}
                  </Heading>
                  <Text fontSize="md" fontWeight="semibold" mb={3} color="gray.600">
                    {edu.department}
                  </Text>
                  {edu.details.length > 0 && (
                    <VStack align="stretch" spacing={1}>
                      {edu.details.map((detail, i) => (
                        <Text key={i}>{detail}</Text>
                      ))}
                    </VStack>
                  )}
                </Box>
                <Text
                  color={primaryColor}
                  fontWeight="semibold"
                  whiteSpace={{ base: "normal", md: "nowrap" }}
                  alignSelf={{ base: 'flex-start', md: 'flex-start' }}
                >
                  {edu.period}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Education

