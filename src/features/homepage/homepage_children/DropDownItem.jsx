import { useState, useRef } from "react";

const DropDownItem = ({ className, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`drop-down-container ${className}`}>
      <div onClick={toggleOpen} className="drop-down-title">
        <h2>{title}</h2>
        {isOpen ? <h1>-</h1> : <h2>+</h2>}
      </div>
      <div
        ref={contentRef}
        className="drop-down-content-wrapper"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="drop-down-content">{children}</div>
      </div>
    </div>
  );
};

export default DropDownItem;