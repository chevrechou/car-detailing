export const metadata = {
  title: "Contact and Booking | Pay Attention 2 Detail",
  description: "Request an appointment for interior or exterior detailing, paint correction, or coatings.",
};

export default function ContactPage() {
  return (
    <section>
      <h1>Contact and Booking</h1>
      <p className="muted">Tell us about your vehicle and the service you want.</p>

      <form className="form" action="#" method="post">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" placeholder="(555) 555 5555" />
        </label>
        <label>
          Vehicle
          <input type="text" name="vehicle" placeholder="Year Make Model" />
        </label>
        <label>
          Service
          <input type="text" name="service" placeholder="Full detail, coating, etc." />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} placeholder="Preferred dates, location, and any problem areas"></textarea>
        </label>
        <button type="submit">Request Appointment</button>
      </form>

      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>Service Area</h3>
        <p>Mobile appointments available in the metro area. Shop visits by appointment.</p>
        <p className="muted">Hours 9am to 6pm, Mon to Sat.</p>
      </div>
    </section>
  );
}
