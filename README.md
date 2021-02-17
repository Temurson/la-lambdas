# Lambdoos


## Examples

Valid:
```
x                               # => x
λx->x                           # => λx->x
λx->λy->x                       # => λx->λy->x
λx->(\y->x) a                   # => λy->a
\x->\y->\z->x y \y->(y y)       # => \y->\z->(y y)
```

Invalid:
```
λx(->λy->y)
```

Valid syntax, invalid execution
```bnf
```



## Grammar
This here be a grammar tho

```bnf
E = (TERM) | TERM
TERM -> APP | ABS | VAR
APP -> E E
ABS -> FN VAR `->` E
FN -> `\` | `λ`
VAR -> `id`
```
