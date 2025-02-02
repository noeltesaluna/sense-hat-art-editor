import React, { useEffect, useState } from 'react'
import { Button, Code } from '@chakra-ui/react'
import { gridColoursToString } from '@/functions/gridToCode'

function Generator({gridColours}) {
  const [gridCode, setGridCode] = useState(gridColoursToString(gridColours))
  
  return (
    <div>
      <Button onClick={() => setGridCode(gridColoursToString(gridColours))}>
          Generate
      </Button> 
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
    </div>
  )
}

export default Generator
