import React from 'react'
import { Box } from '@chakra-ui/react'
import Pixel from './Pixel';

function Row({newColour}) {
    let pixels = [];
    for (let i = 0; i < 8; i++) {
        pixels.push(<Pixel newColour={newColour}/>);
    }
    return (
        <Box display={'block'} m={0} p={0} h={10}> 
            {pixels}
        </Box>
    )
}

export default Row
