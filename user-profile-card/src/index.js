import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import TodoApp from './To-DO-List/ToDoApp';
import CounterApp from './CounterExer/CounterApp';
import UserProfileCard from './UserProfileCard';
import EventHandlingApp from './Evenet-Handling-app/EventHandlingAPP';
import FormComponent from './ControlledComponentForm/FormComponent';
import 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp/>
    <CounterApp/>
    <UserProfileCard name ="Birhane" age ="30" email= "hame4329@gmail.com"/>
    <EventHandlingApp/>
    <FormComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
