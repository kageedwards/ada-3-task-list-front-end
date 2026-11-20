import { useState } from "react";
import PropTypes from "prop-types";

import "./Task.css";

const Task = ({ id, title, isComplete, toggleTaskDone }) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete
    ? "tasks__item__toggle--completed"
    : "tasks__item__toggle";

  const taskCompleted = () => {
    toggleTaskDone(id);
  };

  return (
    <li className="tasks__item">
      <button className={buttonClass} onClick={taskCompleted}>
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
};

export default Task;
