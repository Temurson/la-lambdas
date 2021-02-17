import Tokenizr, { Token } from 'tokenizr'

const lexer = new Tokenizr()

lexer.rule(/\(/, ctx => {
    ctx.accept("lparen")
})
lexer.rule(/\)/, ctx => {
    ctx.accept("rparen")
})
lexer.rule(/[\\λ]/, ctx => {
    ctx.accept("lambda")
})
lexer.rule(/->/, ctx => {
    ctx.accept("fn_sep")
})
lexer.rule(/[a-zA-Z_][a-zA-Z0-9_]*/, (ctx, match) => {
    ctx.accept("id")
})
// /#[^\r\n]*[(?:\r?\n)\Z]/
lexer.rule(/#[^\r\n]*/, (ctx, match) => {
    ctx.ignore()
})
lexer.rule(/[ \t\r\n]+/, (ctx, match) => {
    ctx.ignore()
})

export const lex = (src: string): Token[] => {
    lexer.input(src)
    // lexer.debug(true)
    return lexer.tokens()

}
