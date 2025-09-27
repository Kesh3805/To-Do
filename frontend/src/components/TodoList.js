import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onUpdateTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-items">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={() => onToggleTodo(todo._id)}
          onUpdate={onUpdateTodo}
          onDelete={() => onDeleteTodo(todo._id)}
        />
      ))}
    </div>
  );
};

export default TodoList;