import { lex } from './lexer'
import { TokenTypes } from './types'

describe('the lexer', () => {

    it('λ and \\ may both be used to start a function', () => {
        expect(lex('λ')[0].type).toBe(lex('\\')[0].type)
    })

    describe('whitespace and comments', () => {

        it.each([
            ['\\x->x', '\\x         ->\tx\n'],
            ['# foo bar baz', ''],
            ['# \\x->x', ''],
            ['# la de da\n \\x->x', '\\x->x'],
            [ '# comment on top  \t foo \n \\x->\\y->x \n\n  # Comment on bottom\n', '\\x->\\y->x']
        ] as [string, string][])('lex("%s") ≡ lex("%s")', (...args: [string, string]) => {
            const [expected, actual] = args.map(
                inputs => lex(inputs).map(t => t.type)
            )

            expect(expected).toEqual(actual)
        })
    })

    describe.each([
        ['\\x->x', ['lambda', 'id', 'fn_sep', 'id', 'EOF']],
        ['x', ['id', 'EOF']],
        [String.raw`λx->(\y->x) a`, ['lambda', 'id', 'fn_sep', 'lparen', 'lambda', 'id', 'fn_sep', 'id', 'rparen', 'id', 'EOF']]
    ] as [string, TokenTypes[]][])
        ('lex("%s")', (input, expected) => {

            let types: string[]

            beforeAll(() => {
                types = lex(input).map(tok => tok.type)
            })

            it(`token types are [${expected}]`, () => {
                expect(types).toEqual(expected)
            })
        })
})
