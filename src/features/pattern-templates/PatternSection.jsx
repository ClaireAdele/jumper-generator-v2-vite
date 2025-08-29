import ReactMarkdown from "react-markdown";
import { useState, useRef } from "react";

const PatternSection = ({ patternSection, patternData }) => {
    const { markdown, sectionTitle } = patternSection;
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="pattern-section">
            <div onClick={toggleOpen} className="pattern-section-title">
                <h2>{sectionTitle}</h2>
                 {isOpen ? <h1>-</h1> : <h2>+</h2>}
            </div>

            <div ref={contentRef} className="pattern-section-text-wrapper" style={{
                maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
            }}>
                <div className="pattern-section-text"><ReactMarkdown >
                    {markdown}
                </ReactMarkdown></div>
            </div>

        </div>
    );
};

export default PatternSection;