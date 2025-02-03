import React, { useEffect, useState } from 'react'
import { Code, Flex } from '@chakra-ui/react'

function CodeBlock({gridCode}) {
  return (
    <Flex 
      align={'center'} 
      justify={'center'} 
      p={'10'} 
      bg={'#18181B'} 
      borderRadius={10}
    >
      <Code 
        display={'block'}
        whiteSpace={'pre'}
        children={`
from sense_hat import SenseHat

sense = SenseHat()
pixels = [
${gridCode}
]

sense.set_pixels(pixels)
        `}>
      </Code>
    </Flex>
  )
}

export default CodeBlock
