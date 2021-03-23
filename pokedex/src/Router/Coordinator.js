
export const goToPokedex = (history) => {
    history.push("/pokedex")
}

export const goToHome = (history) => {
    history.push("/")
}

export const goToDetails = (history) => {
    history.push("/details")
}

export const goToBack = (history) => {
    history.goBack()
}