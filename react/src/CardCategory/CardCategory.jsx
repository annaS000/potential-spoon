import "./CardCategory.css";
import { Card } from "../Card/Card.jsx";

export const CardCategory = ({ className, ...props }) => {
  return (
    <div className={"card-category " + className}>
      <Card className="card-instance"></Card>
      <Card className="card-instance"></Card>
      <Card className="card-instance"></Card>
      <Card className="card-instance"></Card>
      <Card className="card-instance"></Card>
      <Card className="card-instance"></Card>
      <Card className="card-instance"></Card>
    </div>
  );
};
