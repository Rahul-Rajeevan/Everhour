import { Button, Checkbox, Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    const navigate=useNavigate()
  return (
    <Flex direction="column" alignItems="center" boxShadow='dark-lg' w="30%" m="auto">
        <br/><br/>
        <Text fontSize={['xl']} fontWeight="bold" w="55%">Welcome to Everhour</Text>
        <Text fontSize={['md']}>Add your info to make collaborating easy</Text>
        <br/>
        <Flex w="80%" direction="column">
        <Text textAlign="left">Full Name</Text>
        <Input placeholder='e.g. Rahul Rajeevan' w="100%"/><br/>
        </Flex>
        <Flex w="80%" direction="column">
        <Text textAlign="left">Job Title</Text>
        <Input placeholder='e.g. CEO, CTO' w="100%"/><br/>
        </Flex>
        <Flex w="80%" direction="column">
        <Text textAlign="left">Phone</Text>
        <InputGroup>
    <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='8196337890' w="70%"/>
  </InputGroup>
        </Flex><br/>
        <Flex w="80%" direction="column">
        <Text textAlign="left">Password</Text>
        <Input placeholder='Enter your password...' w="100%" type="password"/><br/>
        <Button colorScheme='whatsapp' size='lg' onClick={()=>navigate("/details2")}>
    Get Started
  </Button>
        </Flex>
        
  <br/>
  <Flex>
  <Checkbox></Checkbox>
  <Text fontSize={['md']}>I have read and agree to the terms and conditions</Text>
  </Flex>
  
  <br/>
    </Flex>
  )
}

export default Details