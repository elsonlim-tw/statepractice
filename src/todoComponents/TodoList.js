import React, { useState } from "react";
import "../todoComponents/Todo1.css";
import { connect } from "react-redux";
import { add_task } from "../todoActions/todoAction";
import Todoitem from "./Todoitem";

function TodoList({ todoList }) {
  const [newName, setNewName] = useState("");

  const displayTodos = () => {
    const list = todoList.map((todo) => {
      return <Todoitem todoItem={todo} />;
    });

    return list;
  };

  return (
    <div className="todolist">
      <div>
        <span className="Label">Add task</span>
        <span className="newTaskInput">
          <input
            type="input"
            onChange={(event) => setNewName(event.target.value)}
          />
        </span>
        <span>
          <button
            onClick={() => {
              add_task({ name: newName, isDone: false });
              setNewName("");
            }}
          >
            Add Task
          </button>
        </span>
      </div>
      <div>{displayTodos()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todoList: state.todoActions.todoList };
};

const mapDispatchToProps = (dispatch) => ({
  add_task: (todo) => dispatch(add_task(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
