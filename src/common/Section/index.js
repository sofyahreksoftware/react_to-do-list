import { StyledSection, SectionHeader, Title } from "./styled";

const Section = ({ headerAdditionalContent, sectionTitle, sectionBody }) => (
  <StyledSection>
    <SectionHeader>
      <Title>{sectionTitle}</Title>
      {headerAdditionalContent}
    </SectionHeader>
    {sectionBody}
  </StyledSection>
);

export default Section;
