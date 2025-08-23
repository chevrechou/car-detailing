export const metadata = {
  title: "Services | Pay Attention 2 Detail",
  description: "Interior and exterior detailing, paint correction, ceramic coating, and fleet services.",
};

export default function ServicesPage() {
  return (
    <section>
      <h1>Services</h1>
      <p className="muted">
        Every package includes a careful inspection and a final walkaround.
      </p>

      <div className="grid" style={{ marginTop: "1rem" }}>
        <article className="card">
          <h3>Express Wash</h3>
          <p>PH balanced foam wash, wheels and tires, quick interior tidy, spray sealant.</p>
          <p className="muted">Ideal for maintenance between details.</p>
        </article>

        <article className="card">
          <h3>Full Interior Detail</h3>
          <p>Deep vacuum, steam clean and shampoo, leather clean and condition, vents and cracks.</p>
          <p className="muted">Removes light odors and restores a fresh cabin.</p>
        </article>

        <article className="card">
          <h3>Full Exterior Detail</h3>
          <p>Decontamination wash, iron remover, clay bar, machine polish, sealant or wax.</p>
          <p className="muted">Brings back gloss and smooth paint.</p>
        </article>

        <article className="card">
          <h3>Paint Correction</h3>
          <p>Cut and polish to reduce swirls, holograms, and light scratches.</p>
          <p className="muted">Paint depth safe. Panel by panel measurement.</p>
        </article>

        <article className="card">
          <h3>Ceramic Coating</h3>
          <p>Multi year protection with hydrophobic properties and easy maintenance.</p>
          <p className="muted">Great on paint, wheels, and glass.</p>
        </article>

        <article className="card">
          <h3>Fleet and Corporate</h3>
          <p>Mobile on site maintenance plans for company vehicles and dealerships.</p>
          <p className="muted">Ask for monthly or quarterly schedules.</p>
        </article>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Our Process</h2>
      <ol className="muted" style={{ paddingLeft: "1rem" }}>
        <li>Inspection and plan</li>
        <li>Safe wash and prep</li>
        <li>Interior or exterior focus work</li>
        <li>Quality check and protection</li>
        <li>Final walkaround and care tips</li>
      </ol>
    </section>
  );
}
