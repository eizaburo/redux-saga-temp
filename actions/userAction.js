export const updateName = name => {
    return {
        type: 'UPDATE_NAME',
        name: name
    }
}

export const requestNeme = name => {
    return {
        type: 'REQUEST_NAME',
        name: name
    }
}
