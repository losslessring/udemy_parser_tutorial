export function numericLiteral(string) {
    return {
        type: "NumericLiteral",
        value: Number(string),
    }
}
