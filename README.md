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
* [Hide Delegate (218)](#hide-delegate-218)
* [Remove Middle Man (220)](#remove-middle-man-220)
* [Substitute Algorithm (223)](#substitute-algorithm-223)

## Moving Features
* [Move Function (225)](#move-function-225)
* [Move Field (235)](#move-field-235)
* [Move Statements into Function (241)](#move-statements-into-function-241)
* [Move Statements to Callers (245)](#move-statements-to-callers-245)
* [Replace Inline Code with Function Call (251)](#replace-inline-code-with-function-call-251)
* [Slide Statements (252)](#slide-statements-252)
* [Split Loop (257)](#split-loop-257)
* [Replace Loop with Pipeline(261)](#replace-loop-with-pipeline-261)
* [Remove Dead Code(267)](#remove-dead-code-267)

## Organizing Data
* [Split Variable(269)](#split-variable-269)
* [Rename Field(273)](#rename-field-273)
* [Replace Derived Variable with Query(277)](#replace-derived-variable-with-query-277)
* [Change Reference to Value(281)](#change-reference-to-value-281)
* [Change Value to Reference(284)](#change-value-to-reference-284)

## Simplifying Conditional Logic
* [Decompose Conditional(288)](#decompose-conditional-288)
* [Consolidate Conditional Expression(291)](#consolidate-conditional-expression-291)
* [Replace Nested Conditional with Guard Clauses(294)](#replace-nested-conditional-with-guard-clauses-294)
* [Replace Conditional with Polymorphism(299)](#replace-conditional-with-polymorphism-299)
* [Introduce Special Case(318)](#introduce-special-case-318)
* [Introduce Assertion(333)](#introduce-assertion-333)

## Refactoring APIs
* [Separate Query from Modifier(337)](#separate-query-from-modifier-337)
* [Parameterize Function(340)](#parameterize-function-340)
* [Remove Flag Argument(344)](#remove-flag-argument-344)
* [Preserve Whole Object(349)](#preserve-whole-object-349)
* [Replace Parameter with Query(354)](#replace-parameter-with-query-354)
* [Replace Query with Parameter(357)](#replace-query-with-parameter-357)
* [Remove Setting Method(361)](#remove-setting-method-361)
* [Replace Constructor with Factory Function(363)](#replace-constructor-with-factory-function-363)
* [Replace Function with Command(366)](#replace-function-with-command-366)
* [Replace Command with Function(373)](#replace-command-with-function-373)

## Dealing with Inheritance 
* [Pull Up Method(378)](#pull-up-method-378)
* [Pull Up Field(381)](#pull-up-field-381)
* [Pull Up Constructor Body(383)](#pull-up-constructor-body-383)
* [Push Down Method(387)](#push-down-method-387)
* [Push Down Field(388)](#push-down-field-388)
* [Replace Type Code with Subclasses(389)](#replace-type-code-with-subclasses-389)
* [Remove Subclass(397)](#remove-subclass-397)
* [Extract Superclass(402)](#extract-superclass-402)
* [Collapse Hierarchy(408)](#collapse-hierarchy-408)
* [Replace Subclass with Delegate(409)](#replace-subclass-with-delegate-409)
* [Replace Superclass with Delegate(429)](#replace-superclass-with-delegate-429)

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

[Back to Top](#encapsulation)

### Encapsulate Collection (198)
Caso especial do _Encapsulate Record_.

Segundo Fowler, é mais fácil manter dados mutáveis encapsulados, pois, o rastreio das alterações na estrutura se torna explícito.

Muitas vezes, os _getters_ de uma _coleção_ subjacente de uma Classe(_Encapsulated Record_) devolve diretamente o seu estado, sendo possível modificar 
e manipular sem que o _Encapsulated Record_ possa intervir, quebrando o encapsulamento e dificultando a depuração caso ocorra bugs (ou se os desenvolvedores não tiverem conhecimento sobre a estrutura).

O ideal, é devolver uma cópia da coleção e oferecer ao _client_ métodos para manipulação da _coleção_ a partir do _Encapsulated Record_(métodos _add_, _remove_ e _access_).

[Back to Top](#encapsulation)

### Replace Primitive with Object (203)
Nas etapas iniciais do desenvolvimento de software, tomamos a decisão de representar valores como tipo primitivo, 
exemplo: string para representar CPF. À medida que o software evoluí, esses valores não serão mais simples. 
Um CPF pode ser representado sem ou com formatação, ter necessidade de validar e afins. E isso pode acabar com duplicação na lógica.
(O mesmo vale para telefone, date range entre outros).

O ideal é encapsular esses valores para que, futuramente, possam ser adicionados comportamentos.

[Back to Top](#encapsulation)

### Replace Temp with Query (207)
Variáveis temporárias são usadas para capturar o valor de um código de modo a referenciá-lo mais tarde numa função, além 
de explicar o significado da expressão.

Utilizar uma função ao invés de variável temporária, dando mais sentido num contexto mais amplo, além de permitir quebrar 
uma função longa em pequenas.

Caso a variável seja atribuída várias vezes, todas as atribuições devem ser extraídas e colocadas na consulta.

Essa refatoração funciona melhor em classe, pois existe um contexto compartilhado para os métodos extraídos. Fora de 
uma classe, pode correr o risco de ter muitos parâmetros numa função de nível mais alto, perdendo boa parte das vantagens 
de usar uma função.

[Back to Top](#encapsulation)

### Extract Class (211)
Uma Classe deve ser uma abstração nítida, deve lidar apenas com algumas responsabilidades claras.
Uma Classe cresce e acaba ficando cheias de responsabilidades, pois você julga não ser necessária outra classe.

Um bom sinal de que uma Classe deve ser dividida em outra(s) é quando um subconjunto dos dados e um subconjunto dos métodos
parecem formar um conjunto. Outro sinal é quando um subconjunto de dados mudam juntos.

[Back to Top](#encapsulation)

### Inline Class (215)
Às vezes, uma Classe extraída não vale mais a pena, ela não deveria existir. Isso é resultado de mover responsabilidade 
de uma Classe original, tornando-a vazia.

Outro motivo para utilizar _Inline Class_ é quando tenho que refatorar duas classes em outro par de Classes com uma alocação
diferente de recursos. O mais fácil é utilizar _Inline Class_ para juntar ambas, e então usar _Extract Class_ para fazer 
a nova separação.

Esta é a abordagem genérica para reorganizar o código: às vezes, é mais fácil mover elementos, um de cada vez, de um contexto para outro;
outras vezes, porém, é melhor usar _Inline Class_ para reunir os contextos e depois usar _Extract Class_ para separar em 
elementos diferentes.

[Back to Top](#encapsulation)

### Hide Delegate (218)
O segredo para um bom design modular é o encapsulamento. Um encapsulamento significa que módulos precisam saber menos 
sobre outras partes do sistema. Logo, quando houver mudanças num módulo, menos módulos precisarão ter conhecimento sobre elas.

Exemplo: 

Se temos 4 clientes A, B, C e D, onde todos consomem o método _getManager_ da Classe _Department_ que está na Classe
_Person_. Se a interface de _Department_ mudar, todos os clientes saberão e deverão mudar junto a ele. _Person_ pode 
esconder a delegação simplesmente chamando o método que se faz necessário em todos os clientes de _Department_. Em outras
palavras, alguns métodos de _Person_ irão encapsular as chamadas para os métodos de _Department_.

Dessa forma, caso _Department_ mude a sua interface, o impacto será apenas em _Person_.

[Back to Top](#encapsulation)

### Remove Middle Man (220)
Certamente existem vantagens em utilizar o _Hide Delegate_, porém, a sua desvantagem é que, sempre que um cliente precisar
de um método do objeto delegado, o _middle man_ precisará implementar um método simples.

[Back to Top](#encapsulation)

### Substitute Algorithm (223)
Existem muitas formas de fazer uma mesma tarefa. Algumas são mais fáceis que outras. Se eu achar uma maneira mais simples
de fazer algo, substituirei o modo mais complicado pelo modo mais claro. 

Exemplo: utilizar uma _library_ ao invés de utilizar uma implementação complexa.

[Back to Top](#encapsulation)

### Move Function (225)
Um bom motivo para mover funções é quando ela referencia mais elementos de outros contextos do que do contexto em que se
encontra no momento. Dessa forma, outras partes do software serão menos independentes dos detalhes desse módulo.

[Back to Top](#moving-features)

### Move Field (235)
Sempre crie estruturas de dados com um bom design orientado ao domínio(DDD), pois geralmente isso ajuda a criar boas 
estruturas de dados.

Use essa refatoração sempre que possuir estruturas de dados com defeitos. 
Ou quando perceber que tem sempre que passar um campo de um registro quando passa outro registro para uma função. 
É melhor que porções de dados que são sempre passados em conjunto estejam num único registro para que o seu relacionamento 
esteja claro.

[Back to Top](#moving-features)

### Move Statements into Function (241)
Remover duplicação é uma das melhores regras gerais de um código saudável. Se você ver o mesmo código executado
sempre que chamar uma função, mova o código executado para dentro da função. Assim, quaisquer modificações futuras serão
feitas num só lugar e usadas em todos os lugares que o chamam.

[Back to Top](#moving-features)

### Move Statements to Callers (245)
As funções devem ter apenas uma responsabilidade, mas com o tempo acabam crescendo e ficando com duas ou mais
responsabilidades.

Use quando uma função for chamada em vários lugares e variar em algumas delas. O código que varia deve ser 
extraído da função e ser utilizado diretamente em quem chama.

[Back to Top](#moving-features)

### Replace Inline Code with Function Call (251)
Similar o _Move Statements into Function_, mas sem uma função preexistente.

Use para substituir um código _inline_ por uma chamada de função. Dessa forma, é possível dar um nome para a função que 
explique o seu _propósito_ e não o seu _funcionamento_.

[Back to Top](#moving-features)

### Slide Statements (252)
Um código torna-se mais fácil de entender se todos os elementos relacionados aparecem juntos. Logo, é ideal para observar 
estruturas de dados e onde elas são manipuladas, facilitando o meu entendimento.

Geralmente utilizado como passo preparatório para outra refatoração como, por exemplo, _Extract Function_.

Tome cuidado ao mover códigos que possam ter efeitos colaterais. Para evitar isso, é interessante aplicar
o _Command-Query Separation_, dessa forma qualquer função que devolva um valor está livre de efeitos colaterais.
Caso não tenha tanto controle sobre o código, criar testes robustos que possibilitem capturar falhas.

[Back to Top](#moving-features)

### Split Loop (257)
Muitas vezes fazemos mais de uma tarefa num loop. Dessa forma, sempre que for necessário modificar uma dessas tarefas teremos
que entender ambas.

Utilize para separar responsabilidades. Também pode ser usado como forma preparatória para outras refatorações, 
por exemplo, _Extract Function_.

[Back to Top](#moving-features)

### Replace Loop with Pipeline (261)
Utilize _Collection Pipelines_(`map`, `filter` e afins) para maior legibilidade na manipulação de coleção de objetos. 

[Back to Top](#moving-features)

### Remove Dead Code (267)
Remover o código que não é utilizado. Não deixar o código como comentário. Dessa forma, evita outros
programadores a lerem um código que não possuí nenhum efeito.

[Back to Top](#moving-features)

### Split Variable (269)
Variável que recebe valor mais de uma vez é sinal que possuí mais que uma responsabilidade no método. Qualquer variável
com mais de uma responsabilidade deve ser substituída por diversas variáveis, uma para cada responsabilidade.

Variável acumuladora tem apenas uma responsabilidade, então não se encaixa nessa refatoração.

[Back to Top](#organizing-data)

### Rename Field (273)
Nomes são importantes, principalmente se são nomes de campos de um objeto(_record_) amplamente utilizado.

Utilize sempre que precisar de um bom nome para refletir o real significado de um campo.

[Back to Top](#organizing-data)

### Replace Derived Variable with Query (277)
Utilize quando o _uso_ da variável está distante dos locais em que ela pode sofrer mutação. Ao invés de ter uma variável que
seja acumuladora, prefira fazer o cálculo sob demanda. Dessa forma, torna-se mais fácil rastrear os valores da variável.

[Back to Top](#organizing-data)

### Change Reference to Value (281)
Fowler defende que, de modo geral, é mais fácil trabalhar com dados imutáveis, pois é possível passar o objeto para 
diferentes contextos sem se preocupar que o seu valor seja alterado. 

Caso precise que o objeto seja manipulado e observado
por diferentes contextos, é melhor trata-lo como referência, ou seja, aplicar _Change Value to Reference_.

[Back to Top](#organizing-data)

### Change Value to Reference (284)
Inversa de _Change Reference to Value_. 

Utilize quando precisar manipular algum objeto que é compartilhado entre diferentes contextos. Assim, haverá apenas uma 
referência de uma entidade sendo tratada por todos os contextos necessários, ao invés de ter vários _Value Object_ 
espalhados por contextos do qual iriam gerar inconsistência.

[Back to Top](#organizing-data)

### Decompose Conditional (288)
Caso especial de _Extract Function_.

Utilize quando existirem condicionais complexas. Transforme o parâmetro do `if` numa chamada de função que revela a sua 
intenção. Faça isso para cada ramificação, e para o corpo de cada uma delas. No final de tudo, saberá _o que acontece_ e o _por que_.

[Back to Top](#simplifying-conditional-logic)

### Consolidate Conditional Expression (291)
Utilize quando houver condicionais em que cada verificação difere, porém, a ação resultante é a mesma.

Ao aplicar essa refatoração, é possível usar _Extract Function_. Dessa forma, saberá o _por que acontece_ ao invés de _como acontece_.

Não utilizar caso as verificações tiverem uma ação resultante diferente.

[Back to Top](#simplifying-conditional-logic)

### Replace Nested Conditional with Guard Clauses (294)
Segundo Fowler, as expressões condicionais se apresentam em dois estilos. No primeiro, os dois ramos da condicional fazem parte do _happy path_.
No segundo, um ramo é o _happy path_ enquanto os demais são incomuns(exceções).

Utilize quando houver condicionais aninhadas e complexas. Dessa forma, será possível diminuir a complexidade ciclomática,
facilitando observar o _happy path_ da função.

É possível aplicar _Guard Clause_ com a simples inversão das condicionais. Em alguns casos, basta ter um retorno imediato, sem a necessidade
de inversão da condicional. Em todos os casos, começar pela condicional mais externa.

[Back to Top](#simplifying-conditional-logic)

### Replace Conditional with Polymorphism (299)
Utilizar quando tiver condicionais complexas, que se repetem em diversas partes do código para gerar algum valor com base num tipo.

Existem casos onde a implementação base ficará na superclasse, por ser o caso mais comum ou o mais simples, então a variação ficará por conta da subclasse. 
Em outros casos, todas as condicionais variam e não existe um caso base, logo, toda a implementação ficará na subclasse.

[Back to Top](#simplifying-conditional-logic)

### Introduce Special Case (318)
Utilizar quando tiver condicional que busca por um valor específico, que acaba sendo repetida em diversos clientes. Por exemplo, verificar por _null_ em alguma propriedade de um objeto. 
Ao invés de retornar _null_, deve ser retornado um objeto literal que represente o _null_, onde possuí os seus próprios métodos para valores _default_.

_Special Case Object_ são sempre _Value Object_ e, dessa forma, devem ser sempre imutáveis, mesmo que os objetos que eles estejam substituindo não sejam. 
Caso seja um objeto literal(objeto javascript, por exemplo), devo utilizar o _Object.freeze_ para lhe tornar imutável.

Essa refatoração também é chamada de _Null Object Pattern_, porém, para Fowler, esse _pattern_ é um caso especial do _Special Case_.

[Back to Top](#simplifying-conditional-logic)

### Introduce Assertion (333)
Utilize como último recurso para debug.

Uma falha numa asserção sinaliza um erro do programador, além disso, comunica-o sobre o estado em que se supõe que esteja o programa
no respectivo ponto de execução. Asserções não devem afetar a execução de um sistema, ou seja, o programa deve funcionar da mesma maneira com ou sem elas.

Um código autotestável reduz a importância das asserções na depuração.

[Back to Top](#simplifying-conditional-logic)

### Separate Query from Modifier (337)
Segundo Fowler, funções que não possuem efeitos colaterais podem ser chamadas diversas vezes e serem inseridas em outras funções facilmente. Uma regra mencionada por ele é que:
a função que devolve um valor não deve ter efeitos colaterais observáveis(_command-query separation_).

Em casos de _cache_, onde é alterado o estado do objeto, a mudança não é observável, por isso essa refatoração não deve ser aplicada.

[Back to Top](#refactoring-apis)

### Parameterize Function (340)
Utilize quando existirem funções que possuem uma lógica muita parecida que difere apenas nos seus valores literais. 
Dessa forma, a função irá atender a diversos casos, pois poderá ser usada com diferentes valores.

[Back to Top](#refactoring-apis)

### Remove Flag Argument (344)
Utilizar uma flag como argumento para decidir qual fluxo a função deve seguir sinaliza que a função faz mais de uma coisa.

Aplique juntamente _Decompose Conditional_ para criar funções explícitas, que revelem a quem chama a sua verdadeira intenção.

[Back to Top](#refactoring-apis)

### Preserve Whole Object (349)
Segundo Fowler, ao trabalhar com parâmetros de funções que recebem valores derivados, é melhor ter o registro completo e deixar o corpo da função tratar da derivação.
Dessa forma, será mais fácil caso queira pegar outros valores do mesmo registro no futuro.

Além disso, Fowler defende que o principal motivo para não fazer essa refatoração é não querer depender do objeto completo, porém, 
isso é sinal de que a lógica deve ser movida para o próprio objeto completo.

[Back to Top](#refactoring-apis)

### Replace Parameter with Query (354)
Inversa de _Replace Query with Parameter_.

"Se uma chamada de função passar um valor que a função possa facilmente determinar por conta própria, essa é uma forma de duplicação.".
Isso faz com que quem chama a função tenha que determinar o parâmetro, quando poderia estar livre dessa tarefa, sendo essa a responsabilidade do corpo da função.

O motivo mais comum para evitar essa refatoração é se com a remoção do parâmetro a função tenha uma dependência indesejada no seu corpo.

[Back to Top](#refactoring-apis)

### Replace Query with Parameter (357)
Inversa de _Replace Parameter with Query_.

Utilize quando tiver a necessidade de remover do corpo da função uma dependência indesejada. Dessa forma, quem chama a função recebe a responsabilidade de fornecer o valor que antes era interno.

Aplicando essa refatoração tenho a possibilidade de criar funções puras(transparência referencial), ou seja, sempre que eu chamar essa função passando os mesmos valores de parâmetros, terei o mesmo resultado.
E com isso facilito os testes e a compreensão do módulo.

[Back to Top](#refactoring-apis)

### Remove Setting Method (361)
Utilizar quando não faz sentido alterar o valor de um campo após a instanciação. 
Caso algum cliente precise "alterar" o valor de um campo que antes era feito com um setter(e agora é imutável), ele deverá instanciar um novo objeto.

[Back to Top](#refactoring-apis)

### Replace Constructor with Factory Function (363)
O método `constructor` em muitas linguagens orientadas a objeto possuem limitações onde, por exemplo, não é possível retornar uma subclasse. A função de factory serve para tirar algumas dessas limitações.
Utilize quando precisar criar diferentes objetos. 

[Back to Top](#refactoring-apis)

### Replace Function with Command (366)
Inversa de _Replace Command with Function_.

Utilizar quando necessitar quebrar uma função grande e complexa em pequena e simples. 
Com isso, será criado um `objeto de comando`(como Fowler chama), onde o seu propósito será requisição e execução. Um `objeto de comando` contém estado e realiza operações como `execute` e `undo`,
além de ganhar mais flexibilidade, pois permitirá uso de _inheritance_(herança) e _hooks_.

[Back to Top](#refactoring-apis)

### Replace Command with Function (373)
Inversa de _Replace Function with Command_.

Utilizar quando o _Command_ executar algo pequeno e simples. Uma função já é o suficiente para realizar tal tarefa. 

[Back to Top](#refactoring-apis)

### Pull Up Method (378)
Inversa de _Push Down Method_.

Utilizar quando subclasses possuem duplicação no código. O ideal em casos de herança é que comportamento em comum fique na _superclass_,
enquanto os detalhes fiquem na _subclass_.

Existem casos onde esta refatoração é antecedida por outras, como _Parameterize Function_ quando duas funções são muitos parecidas e ao serem alteradas serão 
essencialmente a mesma função, ou _Pull Up Field_ quando o corpo da função duplicada referenciar um campo da _subclass_.

[Back to Top](#dealing-with-inheritance)

### Pull Up Field (381)
Inversa de _Push Down Field_.

Utilizar quando subclasses possuem duplicação nos campos.

Ao aplicar esta refatoração as duplicações são reduzidas de duas formas, tanto no campo quanto nos métodos que utilizam esse campo, 
pois serão movidos para a _superclass_.

[Back to Top](#dealing-with-inheritance)

### Pull Up Constructor Body (383)
Semelhante a _Pull Up Method_.

Utilizar quando possuir comportamento em comum no construtor das subclasses. Chamar o `super()`(JavaScript) e jogar a duplicação na _superclass_.

[Back to Top](#dealing-with-inheritance)

### Push Down Method (387)
Inversa de _Pull Up Method_.

Utilizar quando um método de uma _superclass_ for relevante apenas para uma _subclass_.

[Back to Top](#dealing-with-inheritance)

### Push Down Field (388)
Inversa de _Pull Up Field_.

Utilizar quando um campo de uma _superclass_ for relevante apenas para uma _subclass_.

[Back to Top](#dealing-with-inheritance)

### Replace Type Code with Subclasses (389)
Inversa de _Remove Subclass_.

Utilizar quando tiver uma propriedade que classifica o "tipo" de um _item_, como código de tipo de _employee_(_engineer_, _manager_, _salesman_).

Existe um caso especial onde não posso utilizar _subclasses_(herança direta) se o código de tipo for mutável ou se precisar do código de tipo para outras tarefas.
Nesse caso, devo utilizar herança indireta.

[Back to Top](#dealing-with-inheritance)

### Remove Subclass (397)
Inversa de _Replace Type Code with Subclasses_.

Subclasses são úteis quando precisar de diferentes objetos, por exemplo, _employee_(_engineer_, _manager_, _salesman_), e/ou comportamento polimórfico.
Entretanto, em alguns casos uma _subclass_ não faz muito e não valerá a pena tê-la.

Utilize para remover _subclass_, e substitui-la com um campo na _superclass_.

Uma dica valiosa dada por Fowler é: `sempre que quero mudar o modo de representar algo, procuro primeiro encapsular a representação atual a fim
de minimizar o impacto em qualquer código de cliente.`

[Back to Top](#dealing-with-inheritance)

### Extract Superclass (402)
Utilizar quando classes fizerem tarefas parecidas, aplicar herança para extrair as semelhanças e inseri-las em uma _superclass_.

[Back to Top](#dealing-with-inheritance)

### Collapse Hierarchy (408)
Utilizar quando uma _subclass_ não for mais tão diferente da _superclass_, então combine-as numa única classe.

[Back to Top](#dealing-with-inheritance)

### Replace Subclass with Delegate (409)
Segundo Fowler, uma das desvantagens de utilizar herança é que ela pode só ser usada uma vez, num único eixo de variação.
Exemplo: posso variar comportamento das pessoas de acordo a categoria idade e o nível de renda, 
poderei ter subclasses para jovens e idosos, ou para ricos e pobres, mas não para ambos.
Outra desvantagem de herança é que existirá um relacionamento íntimo entre as classes, então qualquer 
alteração na _superclass_ poderá causar erros nas _subclasses_. É possível resolver ambos os problemas com delegação. 

Fowler também diz que essa refatoração é basicamente `Composition over inheritance`(_gang of four_) onde delegação é o mesmo que `composition`.
E finaliza com a frase de efeito: `Prefira uma mistura criteriosa de composição e herança a usar somente uma delas`.

[Back to Top](#dealing-with-inheritance)

### Replace Superclass with Delegate (429)
Além de usar todas as funções da _superclass_, também deve ser verdade que toda instância da _subclass_ é uma instância da _superclass_,
e ela deve ser um objeto válido em todos os casos em que estivermos usando a _superclass_.

Se as funções da _superclass_ não fazem sentido na _subclass_, é sinal de que não deveria utilizar herança para ter funcionalidades da _superclass_.
Nesse caso, o mais interessante seria instanciar a _superclass_ dentro da _subclass_ e criar métodos de delegação, dessa forma,
será possível utilizar alguns dos métodos da _superclass_ que se fazem necessários na _subclass_.

[Back to Top](#dealing-with-inheritance)

Inspirado por: https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af
