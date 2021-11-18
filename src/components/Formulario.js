import React, { Fragment, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  // Funcion que se ejecuta cada vez que el usuario escirbre
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //cuando el usuario preesiona agregar cita

  const submitcita = e => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);
    // Asignar un ID
    cita.id = uuidv4();

    crearCita(cita);
    // Crear la cita

    //Reiniciar el state
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h1>Crear cita </h1>
      {error ? (
        <p className='alerta-error'>Todos los campos son obligatiorios</p>
      ) : null}
      <form onSubmit={submitcita}>
        <label>Nombre Mascota </label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño </label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
          onChange={actualizarState}
          value={propietario}
        />
        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={actualizarState}
          value={hora}
        />
        <label>Fecha </label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={actualizarState}
          value={fecha}
        />
        <label> Síntomas</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
