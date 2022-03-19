## Pokedex - React-Native | TypeScript | Redux 

> Projeto: Desafio Front End Mobile - Mobix Software Studio

## O que aprendi 

#### Redux - A solução de gerenciamento de estado da aplicação

> Redux é uma Biblioteca Open-Source criada por Dan Abramov e Andrew Clark, sua principal função é gerenciar o estado de uma aplicação. Redux foi inspirada na arquitetura Flux e trazendo também alguns princípios arquiteturais da linguagem Elm.

<div align="center">
    
<h3>O problema</h3>
    <p>Quando um componente precisa compartilhar um 'estado' com outro componente que está em outra parte da aplicação pode envolver outros componentes no meio do caminho até chegar no componente no qual era para ter sido compartilhado inicialmente. </p>
<img src="https://user-images.githubusercontent.com/87882835/159139590-2303ad62-5edd-4a31-aabb-4b478bd612f9.png" height="320px" width="500px"/>
    
<h3>A solução, o estado externalizado</h3>    
    <p>O Redux tem como solução ter um estado externo ao componente, qualquer componente tem acesso a esse estado externalizado e uma vez que o componente alterar seu estado e o outro componente notificado quando o estado do primeiro for alterado </p>
<img src="https://user-images.githubusercontent.com/87882835/159140171-5984588a-83bc-40e7-b019-33ab9ab5b7eb.png" height="320px" width="500px"/>
    
<h3>O fluxo (por baixo dos panos)</h3>    
    <p>Uma visaão geral do fluxo sobre o que acontece após o click, onde a Action Creator cria a Action que passa pelos middlewares vai para o dispatch que direciona a ação (alteração do estado) para o componente referente </p>
<img src="https://user-images.githubusercontent.com/87882835/159140213-2ac1d90c-6d2f-4fa8-a37e-bc9006ac16f5.png" height="250px" width="446px"/>
<img src="https://user-images.githubusercontent.com/87882835/159140217-d76133d8-1546-4639-b5e0-3a7258bc8a45.png" height="250px" width="446px"/>

 </div>
 
