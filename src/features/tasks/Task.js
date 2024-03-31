import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectTaskById } from "./tasksSlice";
import { Section } from "../../common/Section";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Paragraph } from "../../common/Section/styled";

function Task() {
  const { taskId } = useParams();

  const task = useSelector((state) => selectTaskById(state, taskId));

  return (
    <Container>
      <Header headerName="Szczegóły zadania" />

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
    </Container>
  );
}

export default Task;
