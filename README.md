# Notes on _Refactoring_ by Martin Fowler

## Basic Refactorings
* [Extract Function (134)](#extract-function-134)
* [Inline Function (144)](#inline-function-144)
* [Extract Variable (147)](#extract-variable-147)
* [Inline Variable (152)](#inline-variable-152)
* [Change Function Declaration (153)](#change-function-declaration-153)
* [Encapsulate Variable (160)](#encapsulate-variable-160)
* [Rename Variable (165)](#rename-variable-165)
* [Introduce Parameter Object (168)](#introduce-parameter-object-168)
* [Combine Functions into Class (168)](#combine-functions-into-class-172)

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

### Inline Variable (152)
Utilizar quando o nome da variável não diz nada além do que a própria expressão.

### Change Function Declaration (153)
Também conhecido como _Rename Function_, _Rename Method_, _Add Parameter_, _Remove Parameter_, _Change Signature_.

Bons nomes são essenciais para entendimento do sistema de forma fácil. Se possuo um nome descritivo, não tenho a necessidade
de olhar o corpo da função. Porém, o nome de uma Função ou Método, na grande maioria das vezes, não é o melhor na primeira declaração.

Muito útil para diminuir o acoplamento entre módulos, onde uma função ou método muitas vezes não é necessário ter conhecimento
da interface de um objeto. Por exemplo, se tiver uma função para formatar o número de telefone de uma pessoa, onde tal função
aceita uma pessoa como parâmetro, não poderei usá-la para formatar o número de telefone de uma empresa.

[Back to Top](#basic-refactorings)

### Encapsulate Variable (160)
Dados, diferentemente de funções, são difíceis de alterar ou refatorar caso o seu escopo seja amplo.

No caso de uma função antiga,
é possível migra-la mantendo-a intacta como uma função de encaminhamento (o cliente continua a chamar a função antiga, que chama a função nova).

No caso de dados(variáveis), o ideal é ter funções que servem como encapsulamento, tanto de acesso como de atualização para manipulação.

 O encapsulamento garante um controle sobre os dados, como eles podem ou não serem alterados. Ademais, transforma a difícil tarefa 
de reorganizar dados na tarefa mais simples de reorganizar funções, utilizando _Change Function Declaration_, por exemplo.

[Back to Top](#basic-refactorings)

### Rename Variable (165)
Bons nomes são essenciais para o entendimento do software sem gerar muito esforço. Utilizar para que o código se autodescreva.
Não irei conseguir criar bons nomes de primeira tentativa. Ademais, a variável acaba a receber outro nome como consequência
das mudanças nas necessidades dos meus usuários.

O nome de uma variável deve refletir o tamanho do seu escopo. Se ela está inserida numa função de 2 linhas, então posso ter
uma letra como nome. Caso o seu escopo seja mais amplo, devo utilizar um nome mais descritivo.

[Back to Top](#basic-refactorings)

### Introduce Parameter Object (168)
Existem dados que aparecerem em grupo, onde ao chamar um é necessário chamar outro, por exemplo,
_startDate_ e _endDate_. Ao aplicar _Introduce Parameter Object_, eles farão parte do mesmo objeto ou classe, 
tornando esse relacionamento explicito,
e assim diminuindo a quantidade de parâmetros das funções que os chamam.

O real benefício é que isso me permite criar comportamentos comuns nesses dados, 
por exemplo, _isBetween_, criando uma abstração que simplifica a compreensão do meu domínio.

[Back to Top](#basic-refactorings)

### Combine Functions into Class (172)
Utilizar quando funções compartilham o mesmo corpo comum de dados (em geral, passados como argumentos da chamada de função).

Usar uma classe deixa o ambiente comum compartilhado por essas funções mais explicito, permite simplificar as chamadas de 
função dentro do objeto por meio da remoção de vários argumentos, já que usarão variáveis da classe.

[Back to Top](#basic-refactorings)

Inspirado por: https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af
