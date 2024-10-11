import React, { useReducer, useRef } from 'react';
// import './index.css';

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();

  const addTodo = () => {
    const text = inputRef.current.value;
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: text });
      inputRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          ref={inputRef}
          type="text"
          className="border rounded py-2 px-4 w-full"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white rounded ml-2 px-4 py-2"
        >
          Add
        </button>
      </div>
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 mb-2 border rounded ${
              todo.completed ? 'line-through' : ''
            }`}
          >
            {todo.text}
            <div>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className="bg-green-500 text-white rounded px-4 py-2 mr-2"
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
                className="bg-red-500 text-white rounded px-4 py-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
