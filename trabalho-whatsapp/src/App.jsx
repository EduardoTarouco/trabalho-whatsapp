import "./App.css"
import MessageContainer from './components/MessageContainer/MensagemContainer'

function App() {

  const centralizacao = {
      width: "100dvw",
      height: "100dvh",
      display: "flex", 
      justifyContent: "center"
    };

  return (
    <div style={centralizacao}>
      <MessageContainer />
    </div>
  )
}

export default App
