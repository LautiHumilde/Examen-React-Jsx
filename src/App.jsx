// src/App.jsx

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tareas, setTareas] = useState([]);
  const inputRef = useRef();

  const cargarTareas = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3001/tasks');
      setTareas(respuesta.data);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const agregarTarea = async (titulo) => {
    const nuevaTarea = { title: titulo, completed: false };
    try {
      const respuesta = await axios.post('http://localhost:3001/tasks', nuevaTarea);
      setTareas([...tareas, respuesta.data]);
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  const actualizarTarea = async (id, titulo, completada) => {
    const tareaActualizada = { title: titulo, completed: completada };
    try {
      await axios.put(`http://localhost:3001/tasks/${id}`, tareaActualizada);
      const tareasActualizadas = tareas.map(tarea =>
        tarea.id === id ? { ...tarea, ...tareaActualizada } : tarea
      );
      setTareas(tareasActualizadas);
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  };

  const borrarTarea = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      setTareas(tareas.filter(tarea => tarea.id !== id));
    } catch (error) {
      console.error("Error al borrar tarea:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TaskForm agregarTarea={agregarTarea} inputRef={inputRef} />
      <Routes>
        <Route path="/" element={<TaskList tareas={tareas} actualizarTarea={actualizarTarea} borrarTarea={borrarTarea} />} />
      </Routes>
    </div>
  );
};

export default App;
