import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Paragraph } from "../../common/Section/styled";

function About() {
  return (
    <Container>
      <Header headerName="O autorze" />

      <Section
        sectionTitle="Sofya Hrek"
        sectionBody={
          <div>
            <Paragraph>
              Moją ogromną pasją są <strong>styl i moda</strong>. Uwielbiam
              przymierzać różne rzeczy i tworzyć stylizacje, kreując harmonię
              rozmaitych kolorów🎭 i materiałów💄💎
            </Paragraph>
            <Paragraph>
              Niesamowicie pasjonuje mnie <strong>historia mody</strong>. Według
              mnie lata <b>najpiękniejszych stylizacji</b> i{" "}
              <b>wybitnych projektantów</b> nastąpiły w <em>drugim</em>{" "}
              dziesięcioleciu poprzedniego wieku: ach te perły🦪, cekiny,
              wachlarze🪭, kabaretki, wysokie kapelusze🎩 i również te z
              siateczkami, błyszczące sukienki oraz opaski z piórami🪶...
              Uwielbiam przeglądać stare magazyny oraz odwiedzać vintage'owe
              sklepy.
            </Paragraph>
            <Paragraph>
              Wierzę, że styl jednostki jest w stanie odzwierciedlić jej świat
              wewnętrzny, nastrój i charakter🤪.
            </Paragraph>
          </div>
        }
      />
    </Container>
  );
}
export default About;
