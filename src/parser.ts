import { Token } from 'tokenizr'

/*
x                               # => (Var "x")
λx->x                           # => (Abs "x" (Var "x"))
λx->λy->x                       # => (Abs "x" (Abs "y" (Var "x")))
λx->(\y->x) a                   # =>
\x->\y->\z->x y \y->(y y)       # => \y->\z->(y y)
*/

// need to count number of open parens in the process
const parse = (tokens: Token[]): [Expr, Token[]] => {
    switch (tokens[0].type) {
    case 'lparen':
        parse()
        break;
    case 'lambda':
        // parse variable, then parse body, then construct Abs
    }

    return [null, []]
}
