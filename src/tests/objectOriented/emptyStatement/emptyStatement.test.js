import { Parser } from "../../../objectOriented/Parser/Parser"

describe("parse empty statement", () => {
    it("returns empty statement", () => {
        const parser = new Parser()
        const program = `;`
        const ast = parser.parse(program)

        const result = {
            type: "Program",
            body: [
                {
                    type: "EmptyStatement",
                },
            ],
        }
        expect(ast).toStrictEqual(result)
    })
})
