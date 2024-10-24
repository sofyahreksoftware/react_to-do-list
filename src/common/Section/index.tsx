import { ReactElement, ReactNode } from "react";
import { StyledSection, SectionHeader, Title } from "./styled";

interface SectionProps {
  headerAdditionalContent?: ReactElement;
  sectionTitle: string;
  sectionBody?: ReactNode;
}

export const Section = ({
  headerAdditionalContent,
  sectionTitle,
  sectionBody,
}: SectionProps) => (
  <StyledSection>
    <SectionHeader>
      <Title>{sectionTitle}</Title>
      {headerAdditionalContent}
    </SectionHeader>
    {sectionBody}
  </StyledSection>
);
