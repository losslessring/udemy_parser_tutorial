import { Parser } from "../../../objectOriented/Parser/Parser"

describe("parse string", () => {
    it(`returns expression with string literal from string "hello";`, () => {
        const parser = new Parser()
        const program = `"hello";`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "StringLiteral", value: "hello" },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it(`returns expression with string literal from string 'hello'; in single quotes`, () => {
        const parser = new Parser()
        const program = `'hello';`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "StringLiteral", value: "hello" },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })
})
