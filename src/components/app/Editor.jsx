import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Button } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import Pixel from './pixel';

function Editor({gridColours, setGridColours}) {
    const [newColour, setNewColour] = useState();
      
    const updateColour = (index, colourUpdate) => {
    setGridColours((prevColours) => {
            const updatedColours = [...prevColours];
            updatedColours[index] = colourUpdate;
            return updatedColours;
        })
    }

    const clearGrid = () => {
        setGridColours(() => {
            return Array(64).fill("#000000")
        })
    }
    return (
        <div>
            <HexColorPicker color={newColour} onChange={setNewColour} />
                <Button onClick={() => clearGrid()}>Clear</Button>
                <SimpleGrid columns={[8, null, 8]}>
                    {gridColours.map((colour, index) => (
                    <Pixel
                        key={index}
                        colour={colour}
                        onClick={() => updateColour(index, newColour)}
                    />
                    ))}
                </SimpleGrid>
        </div>
    )
}

export default Editor
