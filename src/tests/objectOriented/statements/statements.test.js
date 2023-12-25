import { Parser } from "../../../objectOriented/Parser/Parser"

describe("statements", () => {
    it("multiple statements", () => {
        const parser = new Parser()
        const program = ` 
       "hello";
       42;
        `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "StringLiteral", value: "hello" },
                },
                {
                    type: "ExpressionStatement",
                    expression: { type: "NumericLiteral", value: 42 },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("multiple statements with empty lines", () => {
        const parser = new Parser()
        const program = ` 
        
       "hello";

       42;
        `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "StringLiteral", value: "hello" },
                },
                {
                    type: "ExpressionStatement",
                    expression: { type: "NumericLiteral", value: 42 },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("multiple statements with comments", () => {
        const parser = new Parser()
        const program = ` 
        /**
        * this comment should be skipped
        */
       "hello";
       //Number
        42;
        `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "StringLiteral", value: "hello" },
                },
                {
                    type: "ExpressionStatement",
                    expression: { type: "NumericLiteral", value: 42 },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })
})
