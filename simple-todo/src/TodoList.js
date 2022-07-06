import { useHistory } from "react-router-dom"
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const TodoList = (props) => {
    const todoList = props.todoList;

    const [modalIsOpen, setmodalIsOpen] = useState(false);

    function deleteHandler() {
        setmodalIsOpen(true);
    }

    function closeModalHandler() {
        setmodalIsOpen(false);
    }

    const history = useHistory();

    function confirmHandler(id) {
      fetch('http://localhost:8000/todos/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Deleted blog " + id);
            setmodalIsOpen(false);
            history.push('/');
        })
    }

    return ( 
      <div className="todo-list">
        {todoList.map((todo) => (
          <div className="card" key={todo.id}>
          <h2>{todo.title}</h2>
          <div>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
    
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={() => confirmHandler(todo.id)}></Modal>}
            {modalIsOpen && <Backdrop  onClick={closeModalHandler}></Backdrop>}
          </div>
        </div>
        ))}
      </div>    
     );
}
 
export default TodoList;