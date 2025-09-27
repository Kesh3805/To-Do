import React from 'react';

const TodoStats = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  const highPriorityTodos = todos.filter(todo => todo.priority === 'high' && !todo.completed).length;
  
  const overdueTodos = todos.filter(todo => {
    if (!todo.dueDate || todo.completed) return false;
    const dueDate = new Date(todo.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate < today;
  }).length;

  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <div className="todo-stats">
      <div className="stat-card">
        <h3>{totalTodos}</h3>
        <p>Total Tasks</p>
      </div>
      
      <div className="stat-card">
        <h3>{completedTodos}</h3>
        <p>Completed</p>
      </div>
      
      <div className="stat-card">
        <h3>{pendingTodos}</h3>
        <p>Pending</p>
      </div>
      
      <div className="stat-card">
        <h3>{highPriorityTodos}</h3>
        <p>High Priority</p>
      </div>
      
      <div className="stat-card">
        <h3>{overdueTodos}</h3>
        <p>Overdue</p>
      </div>
      
      <div className="stat-card">
        <h3>{completionRate}%</h3>
        <p>Completion Rate</p>
      </div>
    </div>
  );
};

export default TodoStats;