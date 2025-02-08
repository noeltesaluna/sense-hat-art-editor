import React, { useEffect, useState } from 'react'
import { Code, Flex, Button, Stack} from '@chakra-ui/react'

function CodeBlock({gridCode}) {
  let output = `from sense_hat import SenseHat

sense = SenseHat()
pixels = [
${gridCode}
]

sense.set_pixels(pixels)`

  return (
    <Flex 
      align={'center'} 
      justify={'center'} 
      p={'10'} 
      bg={'#18181B'} 
      borderRadius={10}
    >
      <Stack>
        <Code 
          display={'block'}
          whiteSpace={'pre'}
          children={output}>
        </Code>
        <Button 
          w={20}
          mt={5}
          onClick={() => {navigator.clipboard.writeText(output)}}
        >
          Copy</Button>
      </Stack>
    </Flex>
    
  )
}

export default CodeBlock
