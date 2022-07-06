import TodoList from "./TodoList";
import useFetch from "./useFetch";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const data = useFetch('http://localhost:8000/todos').data;
  const isLoading = useFetch('http://localhost:8000/todos').isLoading;
  const err = useFetch('http://localhost:8000/todos').err;
  console.log("Data fetched: " + data);

  // const todoList = [{'text': 'task1', id: 1}, 
  //                   {'text': 'task2', id: 2}]

  return (
    <Router>
      <h1>Simple TODO</h1>
      <Switch>
        <Route path='/'>
          {isLoading && <p>Loading...</p>}
          {data && <TodoList todoList={data}></TodoList>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
