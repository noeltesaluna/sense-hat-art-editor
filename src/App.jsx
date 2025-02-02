import { useState } from 'react'
import Editor from './components/app/Editor'
import { Code, Button } from '@chakra-ui/react'
import Generator from './components/app/Generator'

function App() {
  const [gridColours, setGridColours] = useState(
    Array(64).fill("#000000")
  )
  return (
    <>
      <Editor 
        gridColours={gridColours}
        setGridColours={setGridColours}
      />
      <Generator
        gridColours={gridColours}
      />
    </>
  )
}

export default App
