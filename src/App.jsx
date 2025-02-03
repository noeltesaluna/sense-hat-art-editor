import { useState } from 'react'
import Editor from './components/app/Editor'
import { Box, Button, Flex } from '@chakra-ui/react'
import CodeBlock from './components/app/CodeBlock'
import { gridColoursToString } from './functions/gridToCode'

function App() {
  <Button 
          onClick={() => setGridCode(gridColoursToString(gridColours))}
          bg={'green.300'}
        >
            Generate
        </Button> 

  const [gridColours, setGridColours] = useState(
    Array(64).fill("#000000")
  )

  const [gridCode, setGridCode] = useState(gridColoursToString(gridColours))
  
  return (
    <Box w={'100bh'} bg={'#242424'} h={'100vh'}>
      <Flex align={'center'} justify={'center'}>
        <Editor 
          gridColours={gridColours}
          setGridColours={setGridColours}
          setGridCode={() => setGridCode(gridColoursToString(gridColours))}
        />
      </Flex>
      <Flex 
        align={'center'} 
        justify={'center'}
        mt={'10'}
        px={5}
      >
        <CodeBlock
          gridCode={gridCode}
        />
      </Flex>
    </Box>
  )
}

export default App
