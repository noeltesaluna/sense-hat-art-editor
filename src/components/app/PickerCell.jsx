import React from 'react'
import { Box } from '@chakra-ui/react'

function PickerCell({colour, onClick}) {
    return (
        <Box 
            bg={colour} 
            p={'2.5'} 
            display={'inline-block'} 
            onClick={onClick}
            borderWidth = {1}
            borderRadius={6}
        />
    )
}

export default PickerCell
