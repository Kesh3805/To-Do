import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: todo.title,
    description: todo.description,
    priority: todo.priority,
    dueDate: todo.dueDate ? new Date(todo.dueDate).toISOString().split('T')[0] : ''
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(todo._id, {
      ...editData,
      dueDate: editData.dueDate || null
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      dueDate: todo.dueDate ? new Date(todo.dueDate).toISOString().split('T')[0] : ''
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const isOverdue = (dateString) => {
    if (!dateString) return false;
    const dueDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate < today && !todo.completed;
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            placeholder="Task title..."
            style={{ marginBottom: '0.5rem' }}
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            placeholder="Task description..."
            style={{ marginBottom: '0.5rem' }}
          />
        </div>

        <div className="form-row" style={{ marginBottom: '1rem' }}>
          <select
            name="priority"
            value={editData.priority}
            onChange={handleChange}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          
          <input
            type="date"
            name="dueDate"
            value={editData.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="todo-actions">
          <button onClick={handleSave} className="btn btn-success">
            💾 Save
          </button>
          <button onClick={handleCancel} className="btn btn-warning">
            ❌ Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <div>
          <h3 className="todo-title">{todo.title}</h3>
          <span className={`todo-priority priority-${todo.priority}`}>
            {todo.priority} priority
          </span>
        </div>
      </div>

      {todo.description && (
        <p className="todo-description">{todo.description}</p>
      )}

      <div className="todo-meta">
        <span>Due: {formatDate(todo.dueDate)}</span>
        <span style={{ color: isOverdue(todo.dueDate) ? '#dc3545' : '#999' }}>
          {isOverdue(todo.dueDate) && '⚠️ Overdue'}
        </span>
        <span>Created: {new Date(todo.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="todo-actions">
        <button 
          onClick={onToggle} 
          className={`btn ${todo.completed ? 'btn-warning' : 'btn-success'}`}
        >
          {todo.completed ? '↩️ Undo' : '✅ Complete'}
        </button>
        <button onClick={handleEdit} className="btn btn-primary">
          ✏️ Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;