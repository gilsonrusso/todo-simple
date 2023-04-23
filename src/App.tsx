import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={themeDefault}>
      <h1>Hello</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
