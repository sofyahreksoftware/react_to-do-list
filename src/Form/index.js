import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") return;
    else addNewTask(newTaskContent.trim());
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};
export default Form;
