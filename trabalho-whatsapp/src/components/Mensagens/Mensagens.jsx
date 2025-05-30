import './Mensagens.css';
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
    <ul>
      {mensagens.map(mensagem => {
        return <Mensagem {...mensagem} />;
      })}
    </ul>
  )
}

export default Mensagens