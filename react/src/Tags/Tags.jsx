import "./Tags.css";
import { Tag } from "../Tag/Tag.jsx";

export const Tags = ({ className, ...props }) => {
  return (
    <div className={"tags " + className}>
      <Tag className="tag-instance"></Tag>
      <Tag className="tag-instance"></Tag>
      <Tag className="tag-instance"></Tag>
      <Tag className="tag-instance"></Tag>
      <Tag className="tag-instance"></Tag>
    </div>
  );
};
