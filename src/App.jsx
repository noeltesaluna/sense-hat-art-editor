import { useState } from 'react'
import Editor from './components/app/Editor'
import { Box, Button, Flex } from '@chakra-ui/react'
import CodeBlock from './components/app/CodeBlock'
import { gridColoursToString } from './functions/gridToCode'
import Navbar from './components/app/Navbar'

function App() {
  const [gridColours, setGridColours] = useState(
    Array(64).fill("#000000")
  )

  const [gridCode, setGridCode] = useState(gridColoursToString(gridColours))
  
  return (
    <Box w={'100bh'} bg={'#242424'} h={'100%'} pb={'10'} >
      <Navbar></Navbar>
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
        mt={'5'}
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
