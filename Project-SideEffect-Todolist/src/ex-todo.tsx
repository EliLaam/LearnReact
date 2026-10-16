import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Plus, 
  RefreshCw, 
  ListTodo, 
  AlertCircle, 
  Loader2,
  CheckCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputTitle, setInputTitle] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  // Fetch initial todos from API limit 10
  const fetchInitialTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8');
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch tasks from server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialTodos();
  }, []);

  // Add new task locally
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputTitle.trim()) return;

    const newTodo = {
      id: Date.now(), // Generate local unique ID
      title: inputTitle.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputTitle('');
  };

  // Toggle completed status
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter tasks based on active filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-start p-4 sm:p-8 font-sans">
      {/* Container */}
      <div className="w-full max-w-2xl bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 p-6 sm:p-8 mt-4">
        
        {/* Header */}
        <header className="flex items-center justify-between pb-6 border-b border-slate-700/60 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600/20 p-3 rounded-xl border border-indigo-500/30 text-indigo-400">
              <ListTodo size={28} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Task Flow
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1 mt-0.5">
                <Calendar size={12} /> Syncing with JSONPlaceholder API
              </p>
            </div>
          </div>

          <button
            onClick={fetchInitialTodos}
            disabled={loading}
            className="flex items-center gap-2 text-xs sm:text-sm bg-slate-700/60 hover:bg-slate-700 active:scale-95 transition-all text-slate-300 hover:text-white px-3 py-2 rounded-xl border border-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Reload from API"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin text-indigo-400' : ''} />
            <span className="hidden sm:inline">Reset API</span>
          </button>
        </header>

        {/* Input Form */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="What needs to be done today?"
            className="flex-1 bg-slate-900/80 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-4 py-3 text-sm sm:text-base text-slate-100 placeholder-slate-500 outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!inputTitle.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed active:scale-95 text-white px-5 py-3 rounded-xl font-medium text-sm sm:text-base flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </form>

        {/* Filters and Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700/40 text-xs sm:text-sm">
          <div className="flex bg-slate-900/60 p-1 rounded-xl border border-slate-700/60 w-full sm:w-auto justify-center">
            {['all', 'active', 'completed'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`capitalize px-4 py-1.5 rounded-lg font-medium transition-all ${
                  filter === type
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="text-slate-400 flex items-center gap-3 text-xs">
            <span>Pending: <strong className="text-indigo-400 font-semibold">{activeCount}</strong></span>
            <span>Completed: <strong className="text-emerald-400 font-semibold">{completedCount}</strong></span>
          </div>
        </div>

        {/* State: Loading */}
        {loading && (
          <div className="py-12 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="animate-spin text-indigo-500" size={32} />
            <p className="text-sm">Fetching tasks from server...</p>
          </div>
        )}

        {/* State: Error */}
        {error && !loading && (
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-400 text-sm mb-4">
            <AlertCircle size={20} className="shrink-0" />
            <p className="flex-1">{error}</p>
            <button 
              onClick={fetchInitialTodos}
              className="text-xs bg-rose-500/20 hover:bg-rose-500/30 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {/* Todo List */}
        {!loading && !error && (
          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredTodos.length === 0 ? (
              <div className="py-12 text-center text-slate-500 flex flex-col items-center justify-center gap-2">
                <Sparkles size={28} className="text-slate-600 mb-1" />
                <p className="font-medium text-slate-400">No tasks found</p>
                <p className="text-xs">
                  {filter === 'all'
                    ? 'Your task list is empty. Add a new task above!'
                    : `There are no ${filter} tasks.`}
                </p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all duration-200 ${
                    todo.completed
                      ? 'bg-slate-900/40 border-slate-800 text-slate-500'
                      : 'bg-slate-900/90 border-slate-700/70 hover:border-slate-600 text-slate-200 shadow-sm'
                  }`}
                >
                  <div 
                    onClick={() => handleToggleTodo(todo.id)}
                    className="flex items-center gap-3 cursor-pointer flex-1 min-w-0 pr-3"
                  >
                    <button 
                      type="button" 
                      className="shrink-0 transition-colors focus:outline-none"
                    >
                      {todo.completed ? (
                        <CheckCircle2 size={20} className="text-emerald-500" />
                      ) : (
                        <Circle size={20} className="text-slate-500 group-hover:text-indigo-400" />
                      )}
                    </button>
                    <span
                      className={`text-sm sm:text-base truncate transition-all ${
                        todo.completed ? 'line-through text-slate-500' : 'text-slate-200'
                      }`}
                    >
                      {todo.title}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="opacity-80 sm:opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition-all shrink-0"
                    title="Delete task"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer info */}
        {todos.length > 0 && (
          <footer className="mt-6 pt-4 border-t border-slate-700/40 flex justify-between items-center text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCheck size={14} className="text-emerald-500" /> 
              {completedCount} of {todos.length} completed
            </span>
            <span>Click task to toggle status</span>
          </footer>
        )}
      </div>
    </div>
  );
}