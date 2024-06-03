import { Container, VStack, Heading, Text, Button, IconButton, HStack, Box, Image } from "@chakra-ui/react";
import { FaBolt, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1562669151-4d4f430a4cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMGxvZ298ZW58MHx8fHwxNzE3NDMxOTk5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Electrician Logo" />
        </Box>
        <Heading as="h1" size="2xl">
          Reliable Electrician Services
        </Heading>
        <Text fontSize="lg">Providing top-notch electrical services for residential and commercial properties. Your safety is our priority.</Text>
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg" leftIcon={<FaBolt />}>
            Our Services
          </Button>
          <Button colorScheme="teal" size="lg" variant="outline" leftIcon={<FaPhone />}>
            Contact Us
          </Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Call us" icon={<FaPhone />} size="lg" />
          <IconButton aria-label="Email us" icon={<FaEnvelope />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
