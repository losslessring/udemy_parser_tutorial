import { Parser } from "./../../../../objectOriented/Parser/Parser"

describe("binary expression plus", () => {
    it("returns binary expression 2 + 2", () => {
        const parser = new Parser()
        const program = `2 + 2;`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: {
                        type: "BinaryExpression",
                        operator: "+",
                        left: {
                            type: "NumericLiteral",
                            value: 2,
                        },
                        right: {
                            type: "NumericLiteral",
                            value: 2,
                        },
                    },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns chained binary expression 3 + 2 - 2;", () => {
        const parser = new Parser()
        const program = `3 + 2 - 2;`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: {
                        type: "BinaryExpression",
                        operator: "-",
                        left: {
                            type: "BinaryExpression",
                            operator: "+",
                            left: {
                                type: "NumericLiteral",
                                value: 3,
                            },
                            right: {
                                type: "NumericLiteral",
                                value: 2,
                            },
                        },
                        right: {
                            type: "NumericLiteral",
                            value: 2,
                        },
                    },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns binary expression 42 + 23", () => {
        const parser = new Parser()
        const program = `42 + 23;`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: {
                        type: "BinaryExpression",
                        operator: "+",
                        left: {
                            type: "NumericLiteral",
                            value: 42,
                        },
                        right: {
                            type: "NumericLiteral",
                            value: 23,
                        },
                    },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })

    it("returns chained binary expression 42 + 23 - 10;", () => {
        const parser = new Parser()
        const program = `42 + 23 - 10;`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: {
                        type: "BinaryExpression",
                        operator: "-",
                        left: {
                            type: "BinaryExpression",
                            operator: "+",
                            left: {
                                type: "NumericLiteral",
                                value: 42,
                            },
                            right: {
                                type: "NumericLiteral",
                                value: 23,
                            },
                        },
                        right: {
                            type: "NumericLiteral",
                            value: 10,
                        },
                    },
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })
})
