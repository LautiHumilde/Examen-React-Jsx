import React from 'react';

const TaskControls = ({ tarea, actualizarTarea, borrarTarea }) => {
  const manejarCompletado = () => {
    actualizarTarea(tarea.id, tarea.title, !tarea.completed);
  };

  return (
    <div>
      <button onClick={manejarCompletado}>{tarea.completed ? 'Desmarcar' : 'Completar'}</button>
      <button onClick={() => borrarTarea(tarea.id)}>Borrar</button>
    </div>
  );
};

export default TaskControls;
