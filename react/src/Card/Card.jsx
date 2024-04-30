import "./Card.css";

export const Card = ({ className, ...props }) => {
  return (
    <div className={"card " + className}>
      <div className="rectangle-6"></div>
      <div className="card-name">Card Name </div>
      <div className="card-detail">Card Detail </div>
      <div className="card-detail-2">Card Detail 2 </div>
      <div className="card-detail-3">Card Detail 3 </div>
    </div>
  );
};
