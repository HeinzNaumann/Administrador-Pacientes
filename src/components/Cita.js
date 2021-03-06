import React from "react";

const Cita = ({ cita, eliminaCita }) => {
  return (
    <div className='cita'>
      <p>
        Mascota:<span>{cita.mascota}</span>
      </p>
      <p>
        Dueño:<span>{cita.propietario}</span>
      </p>
      <p>
        Fecha:<span>{cita.fecha}</span>
      </p>
      <p>
        Sintomas:<span>{cita.sintomas}</span>
      </p>
      <button
        className='button eliminar u-full-width'
        onClick={() => eliminaCita(cita.id)}
      >
        Eliminar x
      </button>
    </div>
  );
};

export default Cita;
