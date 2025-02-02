function hexToDecimal(hex) {
    const string = hex
    let red = parseInt(string.slice(1, 3), 16)
    let green = parseInt(string.slice(3, 5), 16)
    let blue = parseInt(string.slice(5, 7), 16)

    return `(${red}, ${green}, ${blue})`
}

export function gridColoursToString(gridColours) {
    let finalString = '\t'
    for (let i = 0; i < 64; i++) {
        if (i % 8 == 0 && i != 0) {
            finalString += "\n\t"    
        }
        finalString += `${hexToDecimal(gridColours[i])}, `
    }
    return finalString.slice(0, finalString.length - 2)
}