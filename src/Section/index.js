import "./style.css";

const Section = ({ headerAdditionalContent, sectionTitle, sectionBody }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">
        {sectionTitle}
      </h2>
      {headerAdditionalContent}
    </header>
    {sectionBody}
  </section>
);

export default Section;
