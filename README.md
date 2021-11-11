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
* [Combine Functions into Class (172)](#combine-functions-into-class-172)
* [Combine Functions into Transform (177)](#combine-functions-into-transform-177)
* [Split Phase (183)](#split-phase-183)

## Encapsulation
* [Encapsulate Record (190)](#encapsulate-record-190)
* [Encapsulate Collection (198)](#encapsulate-collection-198)
* [Replace Primitive with Object (203)](#replace-primitive-with-object-203)
* [Replace Temp with Query (207)](#replace-temp-with-query-207)
* [Extract Class (211)](#extract-class-211)
* [Inline Class (215)](#inline-class-215)

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
função dentro do objeto por meio da remoção de vários argumentos, já que usarão variáveis de instância.

[Back to Top](#basic-refactorings)

### Combine Functions into Transform (177)
Utilizar quando funções compartilham o mesmo corpo comum de dados (em geral, passados como argumentos da chamada de função).

A partir disso, criar uma função pura, que irá pegar o corpo comum, fazer uma _deep copy_, alterar as propriedades dessa cópia
(transformar ou enriquecer com dados calculados) e devolver para o _client_ com os valores atualizados, sem alterar o corpo original.

Dessa forma todos os lugares que transformam um objeto de entrada para gerar novos valores estão num único lugar.

[Back to Top](#basic-refactorings)

### Split Phase (183)
Utilizar quando uma função faz mais de uma coisa.

Por exemplo, uma função que faz parse e calcula os valores de um pedido.
Dividir em duas fases, onde a primeira fase irá fazer o parse da estrutura, 
e a segunda fase irá fazer os cálculos. A segunda fase irá receber os 
parâmetros necessários, seguido de uma estrutura de dados intermediária que fará a troca de dados entre a primeira e a segunda fase.

[Back to Top](#basic-refactorings)

### Encapsulate Record (190)
Estrutura de dados exemplo:
```js
const range = { start: 1, end: 5 };
//ou
const range = { start: 1, length: 5 };
//ou
const range = { end:5, length: 5 };
```
Fowler prefere objetos a estrutura de dados quando trabalha com dados mutáveis, pois assim é possível expor
apenas os comportamentos, um para cada valor acima, por exemplo. Além disso, o _client_ de um objeto não saberá a estrutura interna 
nem como a lógica de cálculo está implementada, possibilitando assim fazer alterações mais facilmente.

[Back to Top](#basic-refactorings)

### Encapsulate Collection (198)
Caso especial do _Encapsulate Record_.

Segundo Fowler, é mais fácil manter dados mutáveis encapsulados, pois, o rastreio das alterações na estrutura se torna explícito.

Muitas vezes, os _getters_ de uma _coleção_ subjacente de uma Classe(_Encapsulated Record_) devolve diretamente o seu estado, sendo possível modificar 
e manipular sem que o _Encapsulated Record_ possa intervir, quebrando o encapsulamento e dificultando a depuração caso ocorra bugs (ou se os desenvolvedores não tiverem conhecimento sobre a estrutura).

O ideal, é devolver uma cópia da coleção e oferecer ao _client_ métodos para manipulação da _coleção_ a partir do _Encapsulated Record_(métodos _add_, _remove_ e _access_).

[Back to Top](#basic-refactorings)

### Replace Primitive with Object (203)
Nas etapas iniciais do desenvolvimento de software, tomamos a decisão de representar valores como tipo primitivo, 
exemplo: string para representar CPF. À medida que o software evoluí, esses valores não serão mais simples. 
Um CPF pode ser representado sem ou com formatação, ter necessidade de validar e afins. E isso pode acabar com duplicação na lógica.
(O mesmo vale para telefone, date range entre outros).

O ideal é encapsular esses valores para que, futuramente, possam ser adicionados comportamentos.

[Back to Top](#basic-refactorings)

### Replace Temp with Query (207)
Variáveis temporárias são usadas para capturar o valor de um código de modo a referenciá-lo mais tarde numa função, além 
de explicar o significado da expressão.

Utilizar uma função ao invés de variável temporária, dando mais sentido num contexto mais amplo, além de permitir quebrar 
uma função longa em pequenas.

Caso a variável seja atribuída várias vezes, todas as atribuições devem ser extraídas e colocadas na consulta.

Essa refatoração funciona melhor em classe, pois existe um contexto compartilhado para os métodos extraídos. Fora de 
uma classe, pode correr o risco de ter muitos parâmetros numa função de nível mais alto, perdendo boa parte das vantagens 
de usar uma função.

[Back to Top](#basic-refactorings)

### Extract Class (211)
Uma Classe deve ser uma abstração nítida, deve lidar apenas com algumas responsabilidades claras.
Uma Classe cresce e acaba ficando cheias de responsabilidades, pois você julga não ser necessária outra classe.

Um bom sinal de que uma Classe deve ser dividida em outra(s) é quando um subconjunto dos dados e um subconjunto dos métodos
parecem formar um conjunto. Outro sinal é quando um subconjunto de dados mudam juntos.

[Back to Top](#basic-refactorings)

### Inline Class (215)
Às vezes, uma Classe extraída não vale mais a pena, ela não deveria existir. Isso é resultado de mover responsabilidade 
de uma Classe original, tornando-a vazia.

Outro motivo para utilizar _Inline Class_ é quando tenho que refatorar duas classes em outro par de Classes com uma alocação
diferente de recursos. O mais fácil é utilizar _Inline Class_ para juntar ambas, e então usar _Extract Class_ para fazer 
a nova separação.

Uma abordagem genérica de reorganizar o código: às vezes, é mais fácil mover elementos, um de cada vez, de um contexto para outro;
outras vezes, porém, é melhor usar _Inline Class_ para reunir contextos e depois usar _Extract Class_ para separar elementos
diferentes.

[Back to Top](#basic-refactorings)

Inspirado por: https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af
