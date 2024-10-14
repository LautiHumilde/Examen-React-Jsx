import React, { useRef } from 'react';

const TaskForm = ({ agregarTarea }) => {
  const inputRef = useRef();

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarTarea(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input type="text" ref={inputRef} placeholder="Título de la tarea" required />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
