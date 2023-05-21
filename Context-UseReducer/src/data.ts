interface post {
    title: string,
    body: string,
    id: number,
    count: number
}

export const globalState: post = {
    title: "Contador com useReducer",
    body: "Adicione ou retire um número",
    id: 1,
    count: 0
}