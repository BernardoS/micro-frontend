# Single SPA - Micro frontend

## 1 - Configuração do root (criação do orquestrador) 

`npx create-single-spa --moduleType root-config`

OBS.: Caso dê algum problema de versão não resolvida em relação a inicialização da página, executar o seguinte comando:
`npm cache clean --force`

As rotas são configuradas na importação do arquivo ejs

![alt text](import-ejs.PNG)

E o microfrontend é renderizado pelo html

![alt text](implementation-html.PNG)

## 2 - Criação de uma parcel

`npx create-single-spa --moduleType app-parcel`