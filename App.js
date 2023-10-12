import React from 'react';

import TodoList from './Components/TodoList';

function App() {
  

  const todos = [
    { title: 'mswd workbook', completed: false },
    { title: 'aoop workbook', completed: true },
    { title: 'ase workbook', completed: true },
    { title: 'ddais workbook', completed: true },
  ];

  return (
    <div className="App">
     
      
      <TodoList todos={todos} />
    </div>
  );
}

export default App;