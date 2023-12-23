describe("regular expression parse string", () => {
    it(`returns string "hello" from string "hello"`, () => {
        const string = `"hello"`

        const result = /^"[^"]*"/.exec(string)[0]
        expect(result).toStrictEqual('"hello"')
    })
})
