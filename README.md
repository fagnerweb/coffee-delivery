# Projeto Coffee Delivery | Rocketseat

### [Veja online](https://coffee-delivery-mocha.vercel.app/)

Projeto desenvolvido no desafio da Rocketseat que consistia em treinar os conceitos apreendidos. Nele foi desenvolvido uma aplicação que gerencia um carrinho de 
compras de uma cafeteria fictícia, que contém as seguintes funcionalidades:

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor
- Para o desenvolvimento desde desafio foi preciso reelembrar conceitos como:

Para o desenvolvimento desde desafio foi preciso reelembrar conceitos como:
- Estados
- ContextAPI
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

O Diego é o tutor do curso. Estou gostando dos desafios propostos e dos projetos desenvolvidos no curso. Em breve trago novos projetos e melhorias nos existentes.

# Screenshots da aplicação

## Página home

Nessa página usei a Context API para carregar todos os items do café. Além disso, a Context API controla quais items foram adicionados pelo usuário ao carrinho. Para 
desenvolver usei também o styled-components e os icones são da biblioteca phosphor-react.

![Coffee Delivery - Home](https://user-images.githubusercontent.com/42723263/203319426-626f26d9-7566-4dbd-afee-fc71b20cbd54.png)

## Página Checkout

Um detalhe especial nesta página é o uso do Radix nos componentes de radio (formas de pagamento). Com uso desta biblioteca pude usar inputs que não são os tradicionais e usar como 
fossem. Para controlar o formulário usei o react-hook-form e para valiar os dados usei o zod.

![Coffee Delivery - Checkout Filled](https://user-images.githubusercontent.com/42723263/203319555-27aeb52c-4d10-47b0-a9d0-c5c9083dd56d.png)

## Página Sucesso

Essa página carrega um resumo dos dados da página anterior, isso foi possível com o uso da Context API. Caso a pessoa acesse a página sem ter passado pelo checkout é mostrado em tela a informação 
que a pessoa deve adicionar items ao carrinho antes. Essa foi a forma que decidir implementar.

![Coffee Delivery - Success](https://user-images.githubusercontent.com/42723263/203319672-0e7cefe9-4556-4f7e-addb-3ab21f383eac.png)

# Instalação

Instale my-project com npm

```bash
  npm install my-project
```

Execute na sua máquina

```bash
  npm run dev
```

O projeto foi desenvolvido com o vite, typescript, react e o eslint.

Fale comigo
- [Instagram](https://www.instagram.com/fagnermar.silva/)
- [Linkedin](https://www.linkedin.com/in/fagner-martins-894b65254/)
