import React, { useState, useEffect } from 'react'
import List from './List';

function Obtener_listado() {
  
const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <List
        tasks = {tasks}
    />
  )
}

export default Obtener_listado