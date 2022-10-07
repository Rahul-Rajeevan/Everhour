import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <Box w='100%' border="1px solid red" >
      <Flex w="100%" bg="white" h="100px">
      <Flex w="90%" justifyContent="space-between" m="auto"  h="50%">
<Text fontSize='3xl'>Projects</Text>
<Button colorScheme='whatsapp' size='lg'>Create Project</Button>
</Flex>
      </Flex>

    </Box>

  )
}

export default Projects