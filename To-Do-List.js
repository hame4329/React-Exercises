import React, { useState } from 'react';

function TodoApp() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  
  
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  }
  return (
    return (
      <div>
        <input 
        
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter new task..." 
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span style={task.completed ? { textDecoration: 'line-through' } : {}}>{task.text}</span>
              <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}>Delete</button>
              <button onClick={() => {
                  const updatedTasks = tasks.map(t => 
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                  );
                  setTasks(updatedTasks);
              }}>
                {task.completed ? 'Mark as Uncompleted' : 'Mark as Completed'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoApp;
