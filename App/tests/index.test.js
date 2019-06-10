const fullName = (firstName, lastName) =>
    `Hey ${firstName} ${lastName}, this is your first test using Jest!`;

describe('Testing the tests setup', () => {
    it('Should return the full name', () => {
        const result = `Hey Juan Ignacio Cibils, this is your first test using Jest!`;
        expect(fullName('Juan Ignacio', 'Cibils')).toBe(result);
    });
});
