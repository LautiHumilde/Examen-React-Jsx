import React from 'react';
import TaskControls from './TaskControls';

const Task = ({ tarea, actualizarTarea, borrarTarea }) => {
  const manejarCambio = (e) => {
    const nuevoTitulo = e.target.value;
    actualizarTarea(tarea.id, nuevoTitulo, tarea.completed);
  };

  return (
    <li>
      <input type="text" value={tarea.title} onChange={manejarCambio} />
      <TaskControls tarea={tarea} actualizarTarea={actualizarTarea} borrarTarea={borrarTarea} />
    </li>
  );
};

export default Task;
