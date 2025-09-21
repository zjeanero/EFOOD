import { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  branco: '#FFF',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    list-style: none;
  }

  body {
    background-color: ${cores.branco};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    color: ${cores.laranja};
  }
`

