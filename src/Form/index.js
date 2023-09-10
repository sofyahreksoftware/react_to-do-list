import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") return;
    else addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  const onInputFocus = () => {
    inputRef.current.focus();
  };
  
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        className="form__input"
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button onClick={onInputFocus} className="form__button">
        Dodaj zadanie
      </button>
    </form>
  );
};
export default Form;
