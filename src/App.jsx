import { useState } from 'react'
import Editor from './components/app/Editor'

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
    </>
  )
}

export default App
