### PokeDex Challenge

![Screen Shot](https://github.com/Miltonr87/pokemon-pokedex-challenge/blob/main/pokedex.png)

[X] Desktop version

### Sobre

Criado com React Hooks, o **Pokedex** usa uma barra de buscas para pesquisar os bichinhos que aciona o Hooks useEffect. Em integração com o Axios, ele mostra os dados que o usuário deseja por meio de buscas feitas na API do Pokémon. Como nem todos os pokemons estão disponíveis com fotos e ademais atributos, optei por setar um limite de aparecimento deles em 897, o limite foi estabelecido para evitar quebras visuais. Caso o usuário digite ainda um nome de Pokémon errado, uma Barra de Progresso (obtida pelo Material UI) é acionada e simula visualmente uma busca ininterrupta no sistema. Ao clicar também em cada uma das criaturas, uma nova área do Pokedex é aberta e revela o card do Pokémon específico, onde são mostradas informações do seu tipo, poderes e atributos. Nesta área uma nova imagem é exibida (dessa vez em tamanho maior à fornecida pela API originalmente, obtida pela https://pokeres.bastionbot.org/ e que utiliza o mesmo cadastro de IDs) . 

### Ciclo de Vida

Todos os componentes em React possuem algum tipo de Ciclo de Vida. Diferentemente do Vanilla Javascript, o React renderiza seus efeitos em tela por meio do Virtual DOM e utiliza um artifício diferente. Sendo assim, de maneira declarativa, os componentes podem sofrer alterações desde a hora em que são construídos (montados/mounting), atualizados (atualizados/update) até a hora que precisam ser desconstruídos (desmontados/dismount). Para evitar o uso excessivo de classes e tornar o React mais funcional, a curadoria da biblioteca lançou um conjunto de métodos mais funcionais. Sendo assim, useState adiciona estado no React e atualiza um componente, já o useEffect gerencia efeitos colaterais (como buscar dados por exemplo), entre outros.     

### Pacotes Adicionais

- [Axios](https://github.com/axios/axios) (Para capturar e tratar os dados da API de maneira mais simples e rápida do que o Fetch)
- [Styled Components](https://github.com/styled-components/styled-components) (Usado para simplificar o CSS e eliminar o excessivo uso de classes no JSX)
- [React Router](https://reactrouter.com/) (React Component Pattern)
- [React Reactions](https://casesandberg.github.io/react-reactions/) (Para inserir ícones do Pokemon na aplicação)
- [Material UI](https://material-ui.com/) (Para acelerar o processo de criação do CSS e inclusão do efeito de Barra Progressiva)

### Live Demo 

- [LIVE DEMO HERE](https://pokemon-pokedex-challenge-hyno8z4lv.vercel.app/)

#### License

This project is licensed under the [MIT License](https://magno.mit-license.org/2018). Copyright © Milton Rodrigues

