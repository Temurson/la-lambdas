export type TokenTypes =
    | "lparen"
    | "rparen"
    | "lambda"
    | "fn_sep"
    | "id"
    | "EOF"
;

type Term = Var | Abs | App

type Var = {
    kind: "var",
    var: string,
}

type Abs = {
    kind: "abs",
    var: string,
    body: Term,
}

type App = {
    kind: "app",
    fun: Term,
    arg: Term,
}
