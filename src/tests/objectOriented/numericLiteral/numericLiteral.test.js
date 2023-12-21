import { Parser } from "../../../objectOriented/Parser"

describe("parse number", () => {
    it("returns numeric literal from string '42'", () => {
        const parser = new Parser()
        const program = `42`
        const ast = parser.parse(program)

        const result = {
            type: "NumericLiteral",
            value: 42,
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns numeric literal from string '111'", () => {
        const parser = new Parser()

        const program = `111`
        const ast = parser.parse(program)

        const result = {
            type: "NumericLiteral",
            value: 111,
        }
        expect(ast).toStrictEqual(result)
    })
})
