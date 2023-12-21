import { parse } from "../../../functional/parse/parse"

describe("parse number", () => {
    it("returns numeric literal from string '42'", () => {
        const program = `42`
        const ast = parse(program)

        const result = {
            type: "NumericLiteral",
            value: 42,
        }
        expect(ast).toStrictEqual(result)
    })
})
