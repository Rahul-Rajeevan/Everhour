import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmmail = () => {
    const navigate=useNavigate()
    useEffect(()=>{
    setTimeout(() => {
      navigate("/details")  
    }, 5000);
    },[])
  return (
    <Flex direction="column" alignItems="center">
        <Text fontSize={['5xl']} fontWeight="bold" w="55%">Confirm your email</Text>
        <Text fontSize={['xl']}>Click on the link that has just been sent to your inbox to verify
your email and continue the registration process</Text>
        <br/>
        
        <Button colorScheme='whatsapp' size='lg'>
    Back to home
  </Button>
  <br/>
  <Text fontSize={['md']}>Free to try   •   No credit card required   •   1-minute signup</Text>
    </Flex>
  )
}

export default Confirmmail