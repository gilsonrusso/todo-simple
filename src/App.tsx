import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {

  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
