import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Button, Flex, Stack } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import Pixel from './pixel';
import PickerCell from './PickerCell';

function Editor({gridColours, setGridColours}) {
    const [newColour, setNewColour] = useState("#000000") 
    const [lastColours, setLastColours] = useState(
        Array(8).fill("#000000")
    )
    
    const pickLastColour = (index) => {
        console.log(index)
        setNewColour(lastColours[lastColours.length - 1 - index])
    }

    const updateLastColours = (lastColour) => {
        const updatedLastColours = [...lastColours]
        updatedLastColours.push(lastColour)
        updatedLastColours.shift()
        setLastColours(updatedLastColours)
    }
      
    const updateColour = (index, colourUpdate) => {
        if (!lastColours.includes(colourUpdate)) {
            updateLastColours(colourUpdate)
        }
        
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
            <Flex gap={1} p={1}>
                <HexColorPicker color={newColour} onChange={setNewColour}/>
                <Stack gap={1} ml={0.5}>
                    {lastColours.slice(0).reverse().map((colour, index) => (
                        <PickerCell
                            key={index}
                            colour={colour}
                            onClick={() => pickLastColour(index)}
                        />                  
                    ))}
                </Stack>
            </Flex>
            <SimpleGrid 
                columns={[8, null, 8]} 
                borderWidth = {1} 
                borderColor={'grey.500'}
                w={'340px'}
            >
                {gridColours.map((colour, index) => (
                    <Pixel
                        key={index}
                        colour={colour}
                        onClick={() => updateColour(index, newColour)}
                    />
                ))}
            </SimpleGrid>
            <Button 
                onClick={() => clearGrid()}
                bg={'red.500'}
            >
                Clear
            </Button>
        </div>
    )
}

export default Editor
