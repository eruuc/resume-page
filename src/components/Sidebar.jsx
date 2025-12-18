import React from 'react'
import {
  Box,
  Flex,
  VStack,
  HStack,
  Image,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'

const navItems = [
  { label: 'About', index: 0 },
  { label: 'Experience', index: 1 },
  { label: 'Leadership', index: 2 },
  { label: 'Projects', index: 3 },
  { label: 'Education', index: 4 },
  { label: 'Skills', index: 5 },
  { label: 'Interests', index: 6 },
]

function Sidebar({ isOpen, onToggle, currentIndex, onNavigate }) {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const bgColor = useColorModeValue('primary.500', 'primary.600')

  const NavContent = () => (
    <VStack spacing={4} align="stretch" p={4}>
      <Image
        src="/assets/img/profile.jpg"
        alt="Eric Kim"
        borderRadius="full"
        boxSize={{ base: "100px", md: "150px" }}
        mx="auto"
        mb={4}
      />
      <VStack spacing={2} align="stretch">
        {navItems.map((item) => {
          const isActive = currentIndex === item.index
          return (
            <Link
              key={item.index}
              as="button"
              onClick={() => {
                onNavigate(item.index)
                if (isMobile) {
                  onToggle()
                }
              }}
              color="white"
              _hover={{ color: 'gray.200', textDecoration: 'none' }}
              fontSize="lg"
              fontWeight="medium"
              py={2}
              px={4}
              borderRadius="md"
              bg={isActive ? 'primary.600' : 'transparent'}
              _hover={{ bg: 'primary.600' }}
              transition="all 0.2s"
              textAlign="left"
            >
              {item.label}
            </Link>
          )
        })}
      </VStack>
    </VStack>
  )

  if (isMobile) {
    return (
      <>
        <Box
          position="fixed"
          top={4}
          left={4}
          zIndex={1000}
        >
          <IconButton
            icon={<FaBars />}
            onClick={onToggle}
            aria-label="Toggle navigation"
            bg={bgColor}
            color="white"
            _hover={{ bg: 'primary.600' }}
          />
        </Box>
        <Drawer isOpen={isOpen} placement="left" onClose={onToggle}>
          <DrawerOverlay />
          <DrawerContent bg={bgColor}>
            <DrawerCloseButton color="white" />
            <DrawerHeader color="white">Eric Kim</DrawerHeader>
            <DrawerBody p={0}>
              <NavContent />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="250px"
      h="100vh"
      bg={bgColor}
      zIndex={100}
    >
      <Flex
        direction="column"
        h="100%"
        align="center"
        justify="flex-start"
        pt={8}
      >
        <NavContent />
      </Flex>
    </Box>
  )
}

export default Sidebar

