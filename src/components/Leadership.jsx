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

const leadership = [
  {
    organization: 'Oasis at Northeastern',
    title: 'Explorer Series Director',
    period: 'May 2024 - December 2024',
    description: [
      '▪ Revamped Explorer Series to hold five workshops on web development topics, bridging the gap between undergraduate curriculum and industry knowledge to give students the tools necessary to express their knowledge',
      '▪ Collaborated with other Computer Science undergraduate clubs with over 120 participants among all undergraduate clubs utilizing strategic event planning and effective communication strategies',
      '▪ Maintained Oasis website to deliver up-to-date information on upcoming Oasis events and collaborations',
    ],
  },
  {
    organization: 'Oasis at Northeastern',
    title: 'Developer',
    period: 'January 2024 - April 2024',
    description: [
      '▪ Developed a passion project-finding website that aims to match users to passion projects that need more developers',
      '▪ Leveraged React and HTML to streamline the development process, fostering an easy-to-edit modular codebase',
    ],
  },
]

function Leadership() {
  const primaryColor = useColorModeValue('primary.500', 'primary.400')

  return (
    <Box id="leadership" py={{ base: 8, md: 16 }}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8}>
        Leadership
      </Heading>
      <Box>
        {leadership.map((lead, index) => (
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
                    {lead.organization}
                  </Heading>
                  <Text fontSize="md" fontWeight="semibold" mb={3} color="gray.600">
                    {lead.title}
                  </Text>
                  {lead.description.map((desc, i) => (
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
                  {lead.period}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Leadership

