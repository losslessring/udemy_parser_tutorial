import { Parser } from "../../../objectOriented/Parser/Parser"

describe("parse string from string with whitespaces", () => {
    it(`returns string literal from string ' "hello"'`, () => {
        const parser = new Parser()
        const program = ' "hello"'
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "StringLiteral", value: "hello" },
        }
        expect(ast).toStrictEqual(result)
    })

    it(`returns string literal from string '"hello" '`, () => {
        const parser = new Parser()
        const program = '"hello" '
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "StringLiteral", value: "hello" },
        }
        expect(ast).toStrictEqual(result)
    })

    it(`returns string literal from string ' "hello" '`, () => {
        const parser = new Parser()
        const program = ' "hello" '
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "StringLiteral", value: "hello" },
        }
        expect(ast).toStrictEqual(result)
    })

    it(`returns string literal from string '  "hello"  '`, () => {
        const parser = new Parser()
        const program = '  "hello"  '
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: { type: "StringLiteral", value: "hello" },
        }
        expect(ast).toStrictEqual(result)
    })
})
