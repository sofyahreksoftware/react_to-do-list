import { StyledSection, SectionHeader, Title } from "./styled";

export const Section = ({
  headerAdditionalContent,
  sectionTitle,
  sectionBody,
}) => (
  <StyledSection>
    <SectionHeader>
      <Title>{sectionTitle}</Title>
      {headerAdditionalContent}
    </SectionHeader>
    {sectionBody}
  </StyledSection>
);
