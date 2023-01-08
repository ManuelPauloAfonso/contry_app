import { ContryProvider } from "./context"
import Routes from "./routes/routes"
import { GlobalStyle } from "./styles/global"


function App() {
  return (
    <>
      <ContryProvider>
        <Routes />
        <GlobalStyle />
      </ContryProvider>
    </>
  )
}

export default App
