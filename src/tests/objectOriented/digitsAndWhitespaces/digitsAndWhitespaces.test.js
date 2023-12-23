import { Parser } from "../../../objectOriented/Parser/Parser"

describe("parse number from string with whitespaces", () => {
    it("returns numeric literal from string ' 42'", () => {
        const parser = new Parser()
        const program = ` 42`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "NumericLiteral", value: 42 },
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns numeric literal from string '42 '", () => {
        const parser = new Parser()
        const program = `42 `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "NumericLiteral", value: 42 },
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns numeric literal from string ' 42 '", () => {
        const parser = new Parser()
        const program = ` 42 `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "NumericLiteral", value: 42 },
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns numeric literal from string '  42  '", () => {
        const parser = new Parser()
        const program = `  42  `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "NumericLiteral", value: 42 },
        }
        expect(ast).toStrictEqual(result)
    })
})
