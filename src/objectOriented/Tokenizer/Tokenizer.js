const Spec = [
    //Whitespaces
    [/^\s+/, null],

    //Skip single-line comments
    [/^\/\/.*/, null],

    //Skip multi-line comments
    [/^\/\*[\s\S]*?\*\//, null],

    // Delimiters
    [/^;/, ";"],
    [/^\{/, "{"],
    [/^\}/, "}"],

    // Math operators +, -
    [/^[+\-]/, "ADDITIVE_OPERATOR"],

    //Numbers
    [/^\d+/, "NUMBER"],

    //Strings
    [/^"[^"]*"/, "STRING"],
    [/^'[^']*'/, "STRING"],
]

export class Tokenizer {
    init(string) {
        this._string = string
        this._cursor = 0
    }

    isEOF() {
        return this._cursor === this._string.length
    }
    hasMoreTokens() {
        return this._cursor < this._string.length
    }

    getNextToken() {
        if (!this.hasMoreTokens()) {
            return null
        }

        const string = this._string.slice(this._cursor)

        for (const [regexp, tokenType] of Spec) {
            const tokenValue = this._match(regexp, string)

            if (tokenValue == null) {
                continue
            }

            if (tokenType == null) {
                return this.getNextToken()
            }
            return {
                type: tokenType,
                value: tokenValue,
            }
        }

        throw SyntaxError(`Unexpected token: "${string[0]}"`)
    }

    _match(regexp, string) {
        const matched = regexp.exec(string)
        if (matched == null) {
            return null
        }
        this._cursor += matched[0].length
        return matched[0]
    }
}
