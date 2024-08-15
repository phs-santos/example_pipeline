function sum(a, b) {
    return a + b;
}

describe('Teste de exemplo', () => {
    it('Somando 2 + 3 o resultado deve dar 5', () => {
        const result = sum(2, 3);
        expect(result).toBe(5);
    });
});