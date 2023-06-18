import "./style.css";

const SectionTwo = ({ headerAdditionalContent, sectionTitle, sectionBody }) => (
  <section className="section">
    <div className="section__header section__header--withButtons">
      <h2 className="section__title section__title--withoutBorder">
        {sectionTitle}
      </h2>
      {headerAdditionalContent}
    </div>
    {sectionBody}
  </section>
);

export default SectionTwo;
