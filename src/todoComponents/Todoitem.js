import React from "react";
import "../todoComponents/Todo1.css";
import { connect } from "react-redux";
import { delete_task, toggle_complete } from "../todoActions/todoAction";

function Todoitem({ todoItem, toggleCompleteTask, deleteTask }) {
  return (
    <div className="task">
      <span
        className="taskicon"
        onClick={() => toggleCompleteTask(todoItem.name)}
      >
        {!!todoItem.isDone && (
          <img
            height="16"
            src={`${process.env.PUBLIC_URL}/tick.png`}
            alt="task is completed"
          />
        )}
      </span>
      {todoItem.name}
      <span>
        <img
          height="16"
          src={`${process.env.PUBLIC_URL}/delete.png`}
          alt="To delete task"
          onClick={() => deleteTask(todoItem.name)}
        />
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCompleteTask: (name) => dispatch(toggle_complete(name)),
  deleteTask: (name) => dispatch(delete_task(name)),
});

export default connect(null, mapDispatchToProps)(Todoitem);
