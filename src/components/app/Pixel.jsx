
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

function Pixel({colour, onClick}) {    
    return (
        <Box 
            bg={colour} 
            p={'5'} 
            display={'inline-block'} 
            onClick={onClick} 
            borderWidth = {1}
        />
    )
}

export default Pixel
