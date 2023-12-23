describe("regular expression parse whitespaces", () => {
    it(`returns whitespace from whitespace string`, () => {
        const string = ` `

        const result = /^\s+/.exec(string)[0]

        expect(result).toStrictEqual(" ")
    })
})
