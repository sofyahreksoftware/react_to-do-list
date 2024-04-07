import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectTaskById } from "./tasksSlice";
import { Section } from "../../common/Section";
import { StyledContainer } from "../../common/styledContainer";
import { StyledHeader } from "../../common/styledHeader";
import { Paragraph } from "../../common/Section/styled";

function Task() {
  const { taskId } = useParams();

  const task = useSelector((state) => selectTaskById(state, taskId));

  return (
    <StyledContainer>
      <StyledHeader>Szczegóły zadania </StyledHeader>

      {task ? (
        <Section
          sectionTitle={task.content}
          sectionBody={
            <Paragraph>
              <strong>Ukończone:</strong> {task.done ? "tak" : "nie"}
            </Paragraph>
          }
        />
      ) : (
        <Section sectionTitle="Sorka, niestety nie ma takiego zadania🤪" />
      )}
    </StyledContainer>
  );
}

export default Task;
