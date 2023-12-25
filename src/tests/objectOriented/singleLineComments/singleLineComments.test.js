import { Parser } from "../../../objectOriented/Parser/Parser"

describe("skip single line comments", () => {
    it("skip single line comments // and return expression with numeric literal", () => {
        const parser = new Parser()
        const program = ` 
        //this comment should be skipped
        42;`
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
