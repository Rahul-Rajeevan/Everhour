import { Button, Checkbox, Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Details2 = () => {
    const navigate=useNavigate()
    useEffect(() => {
        localStorage.setItem("token","Dsadads")
    }, [])
    
  return (
    <Flex direction="column" alignItems="center" boxShadow='dark-lg' w="30%" m="auto">
    <br/><br/>
    <Text fontSize={['xl']} fontWeight="bold" w="55%">Welcome to Everhour</Text>
    <Text fontSize={['md']}>Add your info to make collaborating easy</Text>
    <br/>
    <Flex w="80%" direction="column">
    <Text textAlign="left">Project</Text>
    <Input placeholder='Project name...' w="100%"/><br/>
    </Flex>
    <Flex>
<Checkbox></Checkbox>
<Text fontSize={['md']}>This project is billable</Text>
</Flex>
    <Flex w="80%" direction="column">
    <Text textAlign="left">Client</Text>
    <Input placeholder='Client name...' w="100%"/><br/>
    </Flex>
    <Flex w="80%" direction="column">
    <Text textAlign="left">Tasks</Text>
    <Input placeholder='Task 1...' w="100%" type="password"/><br/>
    <Input placeholder='Task 2...' w="100%" type="password"/><br/>
    <Input placeholder='Task 3...' w="100%" type="password"/><br/>
    <Input placeholder='Task 4...' w="100%" type="password"/><br/>
    <Button colorScheme='whatsapp' size='lg' onClick={()=>navigate("/project")}>
Create
</Button>
    </Flex><br/>
    
    
<br/>


<br/>
</Flex>
  )
}

export default Details2