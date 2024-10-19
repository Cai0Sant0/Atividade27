import React from "react";
import ReactDOM from "react-dom/client";
import imgLixeira from "../assets/lixo.png";

const Lista = () => {

  function ItemLista(props){


    function apagaItem(evento){
        if (evento.target.parentElement){
            document.getElementById(evento.target.parentElement.id).style = "Display:none;"
        }
    }

    return (
      <>
        <div className="item" id={props.id}>
          {props.item}
          <img src={props.img} className="lixeira" alt="imagem de lixeira" onClick={apagaItem}  />
        </div>
      </>
    );
  }

  const tarefas = [
    "Escovar os dentes",
    "Ir ao mercado",
    "Comprar roupas novas",
    "Tomar banho",
    "Ir no dentista",
    "Estudar",
    "Descansar",
  ];

  return (
    <>
      <main>
        <div className="lista">
        {tarefas.map((item,inidice) => <ItemLista item={item} img = {imgLixeira} id={`item${inidice}`} />)}
        </div>
      </main>
    </>
  );
};

export default Lista;
