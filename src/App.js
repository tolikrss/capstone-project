import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { useState, useRef, useEffect, useReducer } from 'react';

import BookingPage from './components/BookingPage.js';
import HomePage from './components/HomePage.js';


const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  useEffect(() => {
    //Runs on every render
  });

  useEffect(() => {
    //Runs only on the first render
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      // TODO
    }, 1000);

    return () => clearTimeout(timer)
  }, []);


  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <BrowserRouter>
      <header className="">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
              <Link to="/booking">booking</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
