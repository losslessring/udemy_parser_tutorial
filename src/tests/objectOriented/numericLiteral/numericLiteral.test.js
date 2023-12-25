import { Parser } from "../../../objectOriented/Parser/Parser"

describe("parse number", () => {
    it("returns expression with numeric literal from string '42;'", () => {
        const parser = new Parser()
        const program = `42;`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "NumericLiteral", value: 42 },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })
})
