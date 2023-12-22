describe("regular expression parse string", () => {
    xit(`returns string "hello" from string "hello"`, () => {
        const string = `"hello"`

        const result = /^"[^"]*"/.exec(string)[0]
        console.log(result)
        expect(result).toStrictEqual("hello")
    })
})
