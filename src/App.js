import './App.css';

import React, {useState} from "react";


function App() {
  
  //Definir el estado para almacenar el resultado de la suma

  const [resultado, setResultado]=useState(null);

  const elemento=<h1 className="centrar-titulo">Hola Mundo</h1>
  const elemento2=<h2>{/*Suma y centra el resultado*/}</h2>; 

  const Clickedbtn=()=>{

    const result=suma(7,5);

    setResultado(result);

  }


  return <div>
    <button onClick={Clickedbtn} style={{marginTop:"10px", marginLeft: "10px"}}>Click</button>
      <div>{elemento}</div>
      <div>{resultado!=null && <h2>El resultado es: {resultado}</h2>}</div>
    </div>
}

/*
const Clickedbtn=()=>{

  alert(suma(7,5));

};
*/
function suma(a,b){

  return a+b;

}

export default App;
