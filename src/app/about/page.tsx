export const metadata = {
  title: "About | Pay Attention 2 Detail",
  description:
    "Meet Jeremy Smith, a mobile detailer serving the Dallas area with a focus on clean interiors and glossy, protected paint.",
};

export default function AboutPage() {
  return (
    <section>
      <h1>About Pay Attention 2 Detail</h1>

      <p>
        Hi, I am <strong>Jeremy Smith</strong>, a mobile detailer serving the
        Dallas area. I started Pay Attention 2 Detail because I care about the
        little things that make a car feel new again. Clean vents. Crisp
        carpets. Deep gloss. I enjoy the moment a customer sees their vehicle
        and smiles.
      </p>

      <p>
        Whether you want a tidy daily driver or a weekend shine, I come to you
        with the right tools and a careful process. If you need your car
        serviced, I am your person. Send me a message for pricing. I often run
        specials and multi vehicle discounts.
      </p>

      <h2 style={{ marginTop: "1.25rem" }}>What you can expect</h2>
      <ul className="muted" style={{ paddingLeft: "1rem" }}>
        <li>Respect for your time and property</li>
        <li>Safe wash methods and gentle interior care</li>
        <li>Attention to hard to reach areas</li>
        <li>Clear communication and simple pricing</li>
        <li>Results that look great in real light</li>
      </ul>

      <div className="grid" style={{ marginTop: "1.25rem" }}>
        <div className="card">
          <h3>Services I enjoy</h3>
          <ul>
            <li>Interior deep cleans and odor refresh</li>
            <li>Exterior decontamination and gloss boosts</li>
            <li>Light polishing to remove haze and swirls</li>
            <li>Maintenance details that keep cars looking new</li>
          </ul>
        </div>

        <div className="card">
          <h3>Service area</h3>
          <p>
            Mobile appointments in Dallas and nearby communities. Home or office
            visits available.
          </p>
          <p className="muted">Hours by appointment, Mon to Sat.</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: "1.25rem" }}>
        <h3>Ready to book</h3>
        <p>
          Tell me about your vehicle and what you would like done. I will reply
          with recommendations and a clear quote.
        </p>
        <p className="muted">
          Discounts available for repeat clients and multi vehicle bookings.
        </p>
        <a href="/contact" className="btn" style={{ display: "inline-block", marginTop: ".5rem" }}>
          Request an appointment
        </a>
      </div>
    </section>
  );
}
