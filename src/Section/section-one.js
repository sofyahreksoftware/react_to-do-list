import "./style.css";

const SectionOne = ({ sectionBody, sectionTitle }) => (
  <section className="section">
    <h2 className="section__title">{sectionTitle}</h2>
    {sectionBody}
  </section>
);

export default SectionOne;
