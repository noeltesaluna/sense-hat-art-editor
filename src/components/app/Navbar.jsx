import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex 
        h={'5vh'}
        bg={'#1A1A1A'}
        mb={5}
        alignItems={'center'}
        p={8}
    >
        <Image 
            src='Logo.png'
            h={'10'}
        />
    </Flex>
  )
}
{/* <Text style={{ color: 'red', fontSize: '20px' }}> */}

export default Navbar
