import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, nextActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    nextActiveIndex(index);
  };
  const renderedItems = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : " ";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p> {item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      <h1>{renderedItems} </h1>
    </div>
  );
};

export default Accordion;
