export const metadata = {
  title: "Pricing | Pay Attention 2 Detail",
  description: "Transparent pricing for detailing packages by vehicle size and condition.",
};

export default function PricingPage() {
  return (
    <section>
      <h1>Pricing</h1>
      <p className="muted">Final quote may vary based on condition and size.</p>

      <table className="table" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Package</th>
            <th>Sedan</th>
            <th>SUV</th>
            <th>Truck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interior Only</td>
            <td>$129</td>
            <td>$149</td>
            <td>$169</td>
          </tr>
          <tr>
            <td>Exterior Only</td>
            <td>$119</td>
            <td>$139</td>
            <td>$159</td>
          </tr>
          <tr>
            <td>Full Detail</td>
            <td>$229</td>
            <td>$259</td>
            <td>$289</td>
          </tr>
          <tr>
            <td>Paint Correction</td>
            <td>From $399</td>
            <td>From $449</td>
            <td>From $499</td>
          </tr>
          <tr>
            <td>Ceramic Coating</td>
            <td>From $799</td>
            <td>From $899</td>
            <td>From $999</td>
          </tr>
        </tbody>
      </table>

      <div className="grid" style={{ marginTop: "1rem" }}>
        <div className="card">
          <h3>Add ons</h3>
          <p>Pet hair removal +$30 to +$80</p>
          <p>Ozone treatment +$60</p>
          <p>Engine bay detail +$50</p>
          <p>Headlight restoration +$70</p>
        </div>
        <div className="card">
          <h3>Discounts</h3>
          <p>Multi vehicle bookings</p>
          <p>Subscription maintenance plans</p>
          <p>Dealers and fleets</p>
        </div>
      </div>
    </section>
  );
}
