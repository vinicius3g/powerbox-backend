# 02 - Básico dos Componentes

Olá, agora que vocês já sabem o básico do GIT, tiveram a primeira experiencia com o JavaScript, com o terminal utilizando comandos de uma CLI (Command Line Interface) de uma ferramenta robusta como o NPM, e fizeram o primeiro Componente React.. pera.. 

Componente?

## Componentes e `props`

Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente. São como métodos em JavaScript que retornam elementos React e podem receber parâmetros chamados de `props` que descrevem o que deve aparecer na tela.

Existem dois principais tipos:

### Componentes de função

É a maneira mais simples de definir um componente:

```
import React from 'react'

    const FATECLab = (props) => {
    return <h1>Hello, {props.name}</h1>
}
```

### Componentes de classe

Desta maneira você também pode renderizar uma [Classe ES6](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes). Classes tem alguns recursos adicionais que nós discutiremos nas próximas seções. Até lá, nós usaremos componentes de função por serem mais sucintos.


```
import React from 'react'

    class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```

### Renderizando um Componente

Quando o React vê um elemento representando um componente definido pelo usuário, ele passa atributos [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html) para esse componente como um único objeto. Nós chamamos esse objeto de `props`.

```
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="ACCT" />
ReactDOM.render(
  element,
  document.getElementById('root')
)
```

#### [*Props são somente para leitura*](https://pt-br.reactjs.org/docs/components-and-props.html#props-are-read-only)

### Documentação e Exemplos

- [Componentes e Props](https://pt-br.reactjs.org/docs/components-and-props.html)
- [Compondo Componentes](https://pt-br.reactjs.org/docs/components-and-props.html#composing-components)
- [Extraindo Componentes](https://pt-br.reactjs.org/docs/components-and-props.html#extracting-components)