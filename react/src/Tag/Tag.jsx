import "./Tag.css";

export const Tag = ({ className, ...props }) => {
  return (
    <div className={"tag " + className}>
      <div className="option-1">Option 1 </div>
    </div>
  );
};
