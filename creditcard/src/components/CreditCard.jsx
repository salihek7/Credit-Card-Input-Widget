import "../styles.css";

export default function CreditCard({ cardInfo }) {
  const { number, name, validThru, cvv } = cardInfo;
  return (
    <div className={`card ${cvv.length > 0 ? "rotate" : ""}`}>
      <div className="card--content">
        <h2>{number}</h2>
        <div className="name">
          <h4>{name}</h4>
          <h4>{" " + validThru}</h4>
        </div>
      </div>
    </div>
  );
}
