import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");
  useEffect(() => {
    console.log('O componente iniciou!')
    return () => console.log("O componente finalizou!")
  }, [])

  useEffect(() => {
    console.log('O estado nome mudou!')
  }, [nome])

  useEffect(() => {
    console.log('Materia A mudor para: ' + materiaA)
    console.log('Materia B mudor para: ' + materiaB)
    console.log('Materia C mudor para: ' + materiaC)
  }, [materiaA, materiaB, materiaC])

  const alteraNome = (evento) => {
    
    setNome((estadoAnterior) => {
      
      return evento.target.value;
    });
  };
  const redenderizaResultado = () => {
    const media = (materiaA + materiaB + materiaC) / 3;
    return media >= 7 ? (
      <p>Olá {nome}, Você foi aprovado!</p>
    ) : (
      <p>Olá {nome},Você não foi aprovado!</p>
    );
  };
  return (
    <form>
      <ul>
      {[1, 2, 3, 4, 5].map(item => (<li key={item}>{item}</li>))}
      </ul>
     
      <input type="text" placeholder="Seu nome:" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={(evento) =>
          setMateriaA(Number.parseFloat(evento.target.value))
        }
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(evento) =>
          setMateriaB(Number.parseFloat(evento.target.value))
        }
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(evento) =>
          setMateriaC(Number.parseFloat(evento.target.value))
        }
      />
      {redenderizaResultado()}
    </form>
  );
};

export default Formulario;
