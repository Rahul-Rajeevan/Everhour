import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Flex direction="column" alignItems="center">
<Text fontSize={['5xl']} fontWeight="bold" w="55%">Log in to Everhour</Text>
    <Flex w="65%" boxShadow='lg' m="auto" h="500px">
<Flex direction="column" alignItems="center" w="50%">
        <br/><br/><br/>
        <Input placeholder='Login with Google' w="70%"/>
        <br/>
        <Text>or</Text><br/>
        <Input placeholder='Enter your email...' w="70%"/><br/>
        <Input placeholder='Password...' w="70%"/><br/>
        <Button colorScheme='whatsapp' size='lg'>
   Login
  </Button>
  <br/>
  <Flex gap="1rem">
  <Text fontSize={['md']}>Login with SSO</Text>
  <Text fontSize={['md']}>More login options</Text>
  </Flex>
  <Text fontSize={['md']}>Reset password</Text>
    </Flex>
    <Box w="50%">
    <br/><br/><br/>
    <Flex direction="column" w="80%" textAlign="left" m="auto" >
    <Text color="red">NEWS</Text>
<Text fontWeight="bold">Report Folders + Unscheduled Tasks</Text> 
<Text>This time we introduce folders on the Reports page and the Unscheduled Tasks section for Timeline. Learn more</Text>

<Text fontWeight="bold">New Timeline</Text>
<Text>Sync assignments from your connected integrations automatically once you add a task assignee and a due date th... Learn more</Text>

<Text fontWeight="bold">Updates to Tracking Time Without a Task</Text>
<Text>Now you can track time without a task and it will show up on team timesheets immediately. Learn more</Text>
    </Flex>
  </Box>
    
    </Flex>
    </Flex>
    
    
  )
}

export default Login