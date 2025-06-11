import { useState, useRef } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-container">
      <div onClick={toggleOpen} className="faq-question">
        <h2>{question}</h2>
        {isOpen ? <h1>-</h1> : <h2>+</h2>}
      </div>
      <div
        ref={contentRef}
        className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="faq-answer-content">{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;