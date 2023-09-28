import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

function Form({ addNewTask }) {
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
    <StyledForm onSubmit={onFormSubmit}>
        <Input
          className="form__input"
          type="text"
          placeholder="Co jest do zrobienia?"
          autoFocus
          ref={inputRef}
          value={newTaskContent}
          onChange={(event) => setNewTaskContent(event.target.value)}
        />

        <Button onClick={onInputFocus}>Dodaj zadanie</Button>
    </StyledForm>
  );
}

export default Form;
