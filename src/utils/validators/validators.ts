

export const requiredField = (value: string) => {
    return value? undefined : 'Field is required'
}

export const maxLengthCreaqter = (maxLength: number) => {
    return (value: string) => {
        return value.length > maxLength ?  `Max length is ${maxLength} symbols`: undefined
    }
}
