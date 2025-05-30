import "./App.css"
import Mensagens from "./components/Mensagens/MensagensContainer";

function App() {

  const centralizacao = {
      width: "100dvw",
      height: "100dvh",
      display: "flex", 
      justifyContent: "center"
    };

  return (
    <div style={centralizacao}>
      <Mensagens />
    </div>
  )
}

export default App
