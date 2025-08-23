export const metadata = {
  title: "About | Pay Attention 2 Detail",
  description: "Certified detailers focused on safe methods and long lasting protection.",
};

export default function AboutPage() {
  return (
    <section>
      <h1>About Pay Attention 2 Detail</h1>
      <p>
        We deliver high quality detailing with a focus on safe wash methods, proper surface prep, and durable protection.
        Our technicians are trained on modern paint systems and interior materials. We treat every car like it is our own.
      </p>
      <p>
        Mobile service is available in the metro area and we also offer in shop appointments. Fully insured and satisfaction guaranteed.
      </p>

      <div className="grid" style={{ marginTop: "1rem" }}>
        <div className="card">
          <h3>Why choose us</h3>
          <ul>
            <li>Paint safe wash and drying</li>
            <li>Steam and extractor cleaning for interiors</li>
            <li>Measured paint correction when needed</li>
            <li>Premium sealants and ceramic coatings</li>
          </ul>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <ul>
            <li>Ceramic coating installer</li>
            <li>Interior sanitation and odor removal</li>
            <li>DA and rotary polishing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
