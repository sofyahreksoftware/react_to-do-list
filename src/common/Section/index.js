import { StyledSection, Header, Title } from "./styled";

const Section = ({ headerAdditionalContent, sectionTitle, sectionBody }) => (
  <StyledSection>
    <Header>
      <Title>{sectionTitle}</Title>
      {headerAdditionalContent}
    </Header>
    {sectionBody}
  </StyledSection>
);

export default Section;
