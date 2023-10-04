function get_capitalizeInitialName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

function get_lowerInitialName(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1)
}

export {
    get_capitalizeInitialName,
    get_lowerInitialName
}
