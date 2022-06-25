import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    //submitEventの発生元である"form"が持つデフォルト動作(フォームの内容を指定したURLへ送信->ページがリロードされる)をキャンセル
    e.preventDefault()
    if(todo){
      // Date.now() --> purpose to make random id
      setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  };
  console.log(todos)
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
