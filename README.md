# Integrantes do grupo

- André Luiz Morato Barreto
- Daniel Henrique Toledo Santos
- Lucas Mesquita Andrade
- Victor Augusto de Lima Cruz

# Explicação do sistema
É um sistema de linha de comando com as funcionalidades básicas de uma urna eletrônica para votação em um candidato a presidente e dois candidatos a deputados federais. A inicialização da urna e o término da votação são
feitos utilizando uma senha. Somente a pessoa credenciada pelo Tribunal Superior Eleitoral (TSE) tem a senha de início e término da eleição. Cada eleitor pode votar uma única vez, utilizando seu título de eleitor. Ao se 
apresentar para votar, o eleitor fornece o número de seu título. Pelo número do título, a urna eletrônica apresenta o nome do eleitor e, após confirmação dos dados, inicia a votação daquele eleitor. Alguns eleitores 
podem se abster da votação. O eleitor deve votar em 3 candidatos: um presidente e dois deputados. O eleitor pode votar em branco ou nulo. Após o término da eleição, pode-se solicitar a urna eletrônica apresenta 
estatísticas com o número de votos de cada candidato e as respectivas percentagens em relação ao total de votos válidos. A urna diz os candidatos eleitos e derrotados

## Dependencias

- [Java Developer Kit (JDK) 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- Make

## Comandos make

- `make` ou `make full`: Buildar + Executar
- `make build`: Buildar
- `make run`: Executar
- `make clean`: Limpa os arquivos `.class` gerados no build

## Como rodar

- Na root do repositório use o comando `make` para buildar e executar o programa

## Como utilizar

OBS:

- O sistema já vem inicializado com 2 candidatos a presidente e 3 a deputado federal
- O sistema já vem com os dois gestores (de sessão e de candidaturas)
- O sistema já vem com todos os eleitores possíveis para utilizá-los basta checar o arquivo `voterLoad.txt`

No menu inicial para gerenciar candidatos e eleição siga pela opção 2:

- User: `emp` , Password: `12345` -> Cadastro e remoção de candidatos da eleição
- User: `cert` , Password: `54321` -> Inicialização/finalização da eleição (liberar pra poder votar) e mostrar o resultado ao final da eleição.

Além da senha de usuário é necessário a senha da eleição para completar operações relacionadas a gestão da eleição ou candidatos. Essa senha é a palavra `password`

Para votar também existe um eleitor com o título de eleitor nº 123456789012 que pode votar nos candidatos pré-cadastrados

## Execução teste

Para uma execução teste podemos seguir o seguinte passo:

- Ao iniciar a aplicação selecionar a opção 2 e logar com o user `cert`
- Escolher a opção 1 e inserir a senha da urna (`password`) para iniciar a votação
- Escolher a opção 0 para voltar ao menu inicial
- Escolher votar (opção 1) e inserir o nº `123456789012` do eleitor de teste
- Selecionar sim e votar respectivamente `123` , `12345` e `br`
- Escolher votar (opção 1) e inserir o nº `268888719264` (outro eleitor de teste)
- Selecionar sim e votar respectivamente `123` , `54321` e `12345`
- Escolher votar (opção 1) e inserir o nº `638991919941` (outro eleitor de teste)
- Selecionar sim e votar respectivamente `000` , `12345` e `00000`
- Escolher votar (opção 1) e inserir o nº `965575671024` (outro eleitor de teste)
- Selecionar sim e votar respectivamente `123` , `12345` e `00000`
- No menu inicial, selecionar a opção 2 e logar com o user `cert`
- Escolher a opção 2 e inserir a senha da urna (`password`) para encerrar a votação
- Escolher a opção 3 e inserir a senha da urna (`password`) para mostrar o resultado final da votação
- Escolher a opção 0 duas vezes para encerrar a aplicação

## Escolha das funções a serem refatoradas

Após rodar a ferramenta em cima do lizard, foi feita a escolha das 3 funções mais complexas do
ponto de vista da análise ciclomática.
