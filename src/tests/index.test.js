function sum(a, b) {
    return a + b
}

describe("Teste Exemplo", () => {
    it("Primeiro teste", () => {
        const primeiroArgumento = 1
        const segundoArgumento = 5
        const resultado = sum(primeiroArgumento, segundoArgumento)

        expect(resultado).toEqual(primeiroArgumento * segundoArgumento)
    })
})