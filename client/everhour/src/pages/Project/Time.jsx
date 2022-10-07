import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Time = () => {
  const list=["This week","Last week"];
  const [show, setShow] = useState(1)
  return (
    <Flex direction="column" w="95%" alignItems="center" >
       <Flex w="100%" h="70px"  alignItems="center" >
        <Input placeholder='What are you working on...' w="80%" h="80%" bg="white"></Input>
        <Input placeholder='Time period...' w="20%" h="80%" bg="white"></Input>
        <Input placeholder='Date...' w="20%" h="80%" bg="white"></Input>
       <Button colorScheme='whatsapp' w="20%" h="80%">Start Timer</Button>
        </Flex> 
        <Flex direction="column" w="97%" bg="white" boxShadow='lg' borderRadius="10px" mt="10px">
          <Flex gap="2rem" h="50px">
            <Text ml="10px" onClick={()=>setShow(1)} cursor="pointer">List</Text>
            <Text onClick={()=>setShow(2)} cursor="pointer">Timesheet</Text>
          </Flex>
    {show===1&&  <Accordion allowMultiple>
      {list.length>0&&list.map(e=>(
        <AccordionItem >
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {e}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
        ))}  
  

</Accordion>}

{show===2&&  <Accordion allowMultiple>
      {list.length>0&&list.map(e=>(
        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {e}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
        ))}  
  

</Accordion>}
        </Flex>
    </Flex>
  )
}

export default Time