import React from 'react';
import './App.css';
import ShoppingItems from './Components/ShoppingItems';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import InputBox from './Components/InputBox';
import TodoList from './Components/TodoList';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
       <ShoppingItems></ShoppingItems>
       <InputBox></InputBox>
       <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
