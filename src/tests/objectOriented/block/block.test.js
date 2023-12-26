import { Parser } from "../../../objectOriented/Parser/Parser"

describe("block statement", () => {
    it("returns block statement with expression statements", () => {
        const parser = new Parser()
        const program = ` 
    {
      42;
      "hello";
    }
    `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "BlockStatement",

                    body: [
                        {
                            type: "ExpressionStatement",
                            expression: { type: "NumericLiteral", value: 42 },
                        },
                        {
                            type: "ExpressionStatement",
                            expression: {
                                type: "StringLiteral",
                                value: "hello",
                            },
                        },
                    ],
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns empty block statement from empty block", () => {
        const parser = new Parser()
        const program = ` 
    {

    }
    `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "BlockStatement",

                    body: [],
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns nested block statements", () => {
        const parser = new Parser()
        const program = ` 
    {
      42;
      {
        "hello";
      }
    }
    `
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "BlockStatement",

                    body: [
                        {
                            type: "ExpressionStatement",
                            expression: { type: "NumericLiteral", value: 42 },
                        },
                        {
                            type: "BlockStatement",
                            body: [
                                {
                                    type: "ExpressionStatement",
                                    expression: {
                                        type: "StringLiteral",
                                        value: "hello",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })
})
