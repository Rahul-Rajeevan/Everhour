import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()
  return (
    <Flex direction="column" alignItems="center">
        <Text fontSize={['5xl']} fontWeight="bold" w="55%">Make your team more productive with Everhour</Text>
        <Text fontSize={['xl']}>Join 3,500+ customers who use Everhour to track time and plan their future projects more effectively</Text>
        <br/>
        <Input placeholder='Basic usage' w="20%"/>
        <br/>
        <Text>or</Text><br/>
        <Input placeholder='Work email' w="20%"/><br/>
        <Button colorScheme='whatsapp' size='lg' onClick={()=>navigate("/confirm")}>
    Get Started
  </Button>
  <br/>
  <Text fontSize={['md']}>Free to try   •   No credit card required   •   1-minute signup</Text>
    </Flex>
  )
}

export default Signup