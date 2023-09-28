import React, { useState } from "react";

function Task({ text, category }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={handleDelete}>
          X
        </button>
      </div>
    )
  );
}

export default Task;
