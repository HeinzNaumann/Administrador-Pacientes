import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //Arreglo principal

  const [citas, guardarCitas] = useState(citasIniciales);
  // Funcion que tome la nueva

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  };

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // Función que elimina una cita por su id

  const eliminaCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Adminstra tus citas";

  console.log(citas.length);
  return (
    <Fragment>
      <h1> Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>

          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita cita={cita} key={cita.id} eliminaCita={eliminaCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
