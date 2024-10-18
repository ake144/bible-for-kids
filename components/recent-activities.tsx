import { Box, Heading, VStack, Text, HStack, Icon } from '@chakra-ui/react'
import { FaBook, FaQuestionCircle, FaTrophy } from 'react-icons/fa'

export default function RecentActivities() {
  const activities = [
    { id: 1, type: 'quiz', description: "Completed 'Noah's Ark' quiz", icon: FaQuestionCircle },
    { id: 2, type: 'story', description: "Read 'David and Goliath' story", icon: FaBook },
    { id: 3, type: 'achievement', description: "Earned 'Bible Scholar' achievement", icon: FaTrophy },
  ]

  return (
    <Box p={4} bg="gray.50" borderRadius="lg" boxShadow="lg" maxW="5xl" mx="auto">
      <Heading mb={8} color="brand.primary" textAlign="center">Recent Activities</Heading>
      <VStack spacing={4} align="stretch">
        {activities.map((activity) => (
          <Box
            key={activity.id}
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            transition="all 0.2s ease"
          >
            <HStack>
              <Icon as={activity.icon} w={6} h={6} color="brand.secondary" />
              <Text fontSize="lg">{activity.description}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
