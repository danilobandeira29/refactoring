# Notes on _Refactoring_ by Martin Fowler

## Basic Refactorings
* [Extract Function (134)](#extract-function-134)
* [Inline Function (144)](#inline-function-144)
* [Extract Variable (147)](#extract-variable-147)

### Extract Function (134)
Use quando funções são longas. Código usado mais do que uma vez merece a sua própria função.
Se voce investe tempo para tentar entender o que um bloco de código faz, transforme-o numa função com um nome que descreva o seu comportamento.

[Back to Top](#basic-refactorings)


### Inline Function (144)
Oposto do _Extract Function_. Utilizar quando o corpo da função consegue descrever o seu próprio comportamento.
Excelente quando existem muitas chamadas indiretas de função(uma função que chama outra, onde o corpo da segunda já descreve o comportamento).
Em alguns casos, é interessante utilizar o _Inline Function_ para se ter uma visão melhor do que acontece, para posteriormente
aplicar _Extract Function_ com mais cuidado, evitando tantas delegações indiretas e desnecessárias.

### Extract Variable (147)
Existem expressões que são complexas e muito difíceis de entender. Para esses casos, é interessante dividir em pequenas as expressões
que sejam mais fácil de ler. Dessa forma, é possível dar nomes descritivos para essas pequenas expressões.
Caso o sentido seja apenas no contexto de uma função, então utilizar _Extract Variable_ é uma boa solução.
Porém, em casos onde o contexto é mais amplo(além da função que a expressão se encontra), é mais interessante disponibilizar em forma de função
_Extract Function_.

[Back to Top](#basic-refactorings)

Inspirado por: https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af
