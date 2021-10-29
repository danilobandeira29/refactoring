# Notes on _Refactoring_ by Martin Fowler

## Basic Refactorings
* [Extract Function (106)](#extract-function-106)
* [Inline Function (115)](#inline-function-115)

### Extract Function (106)
Use quando funções são longas. Código usado mais do que uma vez merece a sua própria função.
Se voce investe tempo para tentar entender o que um bloco de código faz, transforme-o numa função com um nome que descreva o seu comportamento.

[Back to Top](#basic-refactorings)


### Inline Function (115)
Oposto do _Extract Function_. Utilizar quando o corpo da função consegue descrever o seu próprio comportamento.
Excelente quando existem muitas chamadas indiretas de função(uma função que chama outra, onde o corpo da segunda já descreve o comportamento).
Em alguns casos, é interessante utilizar o _Inline Function_ para se ter uma visão melhor do que acontece, para posteriormente
aplicar _Extract Function_ com mais cuidado, evitando tantas delegações indiretas e desnecessárias.

[Back to Top](#basic-refactorings)

Inspirado por: https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af
