import React from 'react';
import Task from './Task';

const TaskList = ({ tareas, actualizarTarea, borrarTarea, filtrarTareas }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <button onClick={() => filtrarTareas('todas')}>Todas</button>
      <button onClick={() => filtrarTareas('completadas')}>Completadas</button>
      <button onClick={() => filtrarTareas('pendientes')}>Pendientes</button>
      <ul>
        {tareas.map(tarea => (
          <Task key={tarea.id} tarea={tarea} actualizarTarea={actualizarTarea} borrarTarea={borrarTarea} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
