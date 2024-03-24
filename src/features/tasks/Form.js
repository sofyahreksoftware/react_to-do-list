import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { StyledForm, Button, Input } from "./StyledFormComponents";

import { addNewTask } from "./tasksSlice";

function Form() {
  const dispatch = useDispatch();

  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }

    dispatch(
      addNewTask({ id: nanoid(), content: newTaskContent.trim(), done: false })
    );

    setNewTaskContent("");
  };

  const onInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="newTaskContent"
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
      />

      <Button onClick={onInputFocus}>Dodaj zadanie</Button>
    </StyledForm>
  );
}

export default Form;
