import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthPage from './components/AuthPage';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import { todoService } from './services/api';
import './index.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchTodos();
    }
  }, [isAuthenticated]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await todoService.get('/todos');
      setTodos(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Please make sure the backend server is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData) => {
    try {
      const response = await todoService.post('/todos', todoData);
      setTodos([response.data, ...todos]);
      setError('');
    } catch (err) {
      setError('Failed to add todo.');
      console.error('Error adding todo:', err);
    }
  };

  const updateTodo = async (id, todoData) => {
    try {
      const response = await todoService.put(`/todos/${id}`, todoData);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      setError('');
    } catch (err) {
      setError('Failed to update todo.');
      console.error('Error updating todo:', err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await todoService.patch(`/todos/${id}/toggle`);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      setError('');
    } catch (err) {
      setError('Failed to toggle todo.');
      console.error('Error toggling todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.delete(`/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete todo.');
      console.error('Error deleting todo:', err);
    }
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      case 'high':
        return todos.filter(todo => todo.priority === 'high');
      case 'medium':
        return todos.filter(todo => todo.priority === 'medium');
      case 'low':
        return todos.filter(todo => todo.priority === 'low');
      default:
        return todos;
    }
  };

  // Show auth page if not authenticated
  if (!isAuthenticated) {
    return <AuthPage />;
  }

  if (loading) {
    return (
      <div className="app">
        <div className="container">
          <div className="loading">Loading todos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Header />

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <TodoForm onAddTodo={addTodo} />
        
        <div className="todo-list">
          <TodoStats todos={todos} />
          
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span>All ({todos.length})</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              <span>Pending ({todos.filter(t => !t.completed).length})</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              <span>Completed ({todos.filter(t => t.completed).length})</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'high' ? 'active' : ''}`}
              onClick={() => setFilter('high')}
            >
              <span>High Priority ({todos.filter(t => t.priority === 'high').length})</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'medium' ? 'active' : ''}`}
              onClick={() => setFilter('medium')}
            >
              <span>Medium Priority ({todos.filter(t => t.priority === 'medium').length})</span>
            </button>
            <button 
              className={`filter-tab ${filter === 'low' ? 'active' : ''}`}
              onClick={() => setFilter('low')}
            >
              <span>Low Priority ({todos.filter(t => t.priority === 'low').length})</span>
            </button>
          </div>

          <TodoList 
            todos={getFilteredTodos()}
            onToggleTodo={toggleTodo}
            onUpdateTodo={updateTodo}
            onDeleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <TodoApp />
    </AuthProvider>
  );
}

export default App;