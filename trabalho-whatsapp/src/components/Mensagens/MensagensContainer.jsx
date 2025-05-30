import './MensagensContainer.css';
import Botao from '../Botao/Botao';
import Mensagem from '../Mensagem/Mensagem';
import { useState } from 'react';

function Mensagens() {

  const [mensagens, setMensagens] = useState([
    {
      conteudo: "Oi...",
      visualizado: true,
      mensagemUsuario: false
    },
    {
      conteudo: "Tu não me ama mais?",
      visualizado: true,
      mensagemUsuario: false
    },
    {
      conteudo: "Oi, boa tarde.",
      visualizado: false,
      mensagemUsuario: true
    },
    {
      conteudo: "Quem é você mesmo?",
      visualizado: false,
      mensagemUsuario: true
    }
  ]);

  return (
    <div className="chat">
      <div className="header">
        <Botao svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>} />
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {mensagens.map(mensagem => {
            return <Mensagem {...mensagem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Mensagens
