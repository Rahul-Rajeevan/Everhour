import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import Home1 from './Home1'
import Projects from './Projects'
import Time from './Time'

const Times = () => {
  const [box, setbox] = useState(1)
  return (
    <Flex h="750px" border="1px solid black"bg="#fafafa">
<Box w="15%" h="full" border="1px solid red">
      <Flex direction="column" justifyContent="space-between" h="full">
        <Flex direction="column">
          <Flex h="10%" mt="12%" justifyContent="center" gap="1rem">
            <Image src="https://app.everhour.com/assets/img/everhour_48.svg" alt="logo"/>
            <Text>Everhour</Text>
          </Flex>
          <Flex gap="1rem" ml="10%" alignItems="center" h="25%"  mt="12%" onClick={()=>setbox(1)} cursor="pointer" _hover={{bg:"#d7f3e3"}}>
          <i class="fa-solid fa-house"></i>
          <Text>Home</Text>
          </Flex>
          <Flex gap="1rem" ml="10%" alignItems="center" h="25%" onClick={()=>setbox(2)} cursor="pointer" _hover={{bg:"#d7f3e3"}}>
          <i class="fa-regular fa-clock"></i>
          <Text>Time</Text>
          </Flex>
          <Flex gap="1rem" ml="10%" alignItems="center" h="25%" onClick={()=>setbox(3)} cursor="pointer" _hover={{bg:"#d7f3e3"}}>
          <i class="fa-solid fa-briefcase"></i>
          <Text>Projects</Text>
          </Flex>
          <Flex gap="1rem" ml="10%" alignItems="center" h="25%" onClick={()=>setbox(4)} cursor="pointer" _hover={{bg:"#d7f3e3"}}>
          <i class="fa-solid fa-person"></i>
          <Text>Clients</Text>
          </Flex>
          <Flex gap="1rem" ml="10%" alignItems="center" h="25%" onClick={()=>setbox(5)} cursor="pointer" _hover={{bg:"#d7f3e3"}}>
          <i class="fa-solid fa-chart-pie"></i>
          <Text>Reports</Text>
          </Flex>
          <Flex gap="1rem" ml="10%" alignItems="center" h="25%" onClick={()=>setbox(6)} cursor="pointer" _hover={{bg:"#d7f3e3"}}>
          <i class="fa-solid fa-gear"></i>
          <Text>Settings</Text>
          </Flex>
        </Flex>
        <Flex  justifyContent="space-around" alignItems="center">
        <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
        <Text>Hello2</Text>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    
  </MenuButton>
  <MenuList>
    <MenuItem>My Profile</MenuItem>
    <MenuItem>Intergrations</MenuItem>
    <MenuItem>Billing</MenuItem>
    <MenuItem>Apps</MenuItem>
    <MenuItem color="red">Sign Out</MenuItem>
  </MenuList>
</Menu>
        </Flex>
      </Flex>
    </Box>
    {box===1&&<Home1/>}
    {box===2&&<Time/>}
    {box===3&&<Projects/>}
    </Flex>
    
  )
}

export default Times