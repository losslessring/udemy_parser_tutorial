describe("regular expression parse digits", () => {
    it("returns string '42' from string '42'", () => {
        const string = `42`

        const result = /^\d+/.exec(string)[0]

        expect(result).toStrictEqual("42")
    })
})
