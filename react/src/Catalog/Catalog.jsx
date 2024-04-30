import "./Catalog.css";
import { Search } from "../Search/Search.jsx";
import { Tags } from "../Tags/Tags.jsx";
import { CardCategory } from "../CardCategory/CardCategory.jsx";

export const Catalog = ({ className, ...props }) => {
  return (
    <div className={"catalog " + className}>
      <div className="page-contents">
        <div className="header">
          <div className="rectangle-1"></div>
          <div className="site-name">Site Name </div>
        </div>
        <div className="main-layout">
          <div className="page-name">Page Name </div>
          <div className="options">
            <div className="button-1">
              <div className="option-1">Option 1 </div>
            </div>
            <div className="button-2">
              <div className="option-2">Option 2 </div>
            </div>
          </div>
          <Search className="search-instance"></Search>
          <Tags className="tags-instance"></Tags>
          <div className="category-group">
            <div className="category-label">
              <div className="category">Category </div>
              <div className="see-all">See All </div>
            </div>
            <CardCategory className="card-category-instance"></CardCategory>
            <div className="line-1"></div>
          </div>
          <div className="category-group">
            <div className="category-label">
              <div className="category">Category </div>
              <div className="see-all">See All </div>
            </div>
            <CardCategory className="card-category-instance"></CardCategory>
            <div className="line-1"></div>
          </div>
          <div className="category-group">
            <div className="category-label">
              <div className="category">Category </div>
              <div className="see-all">See All </div>
            </div>
            <CardCategory className="card-category-instance"></CardCategory>
            <div className="line-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
