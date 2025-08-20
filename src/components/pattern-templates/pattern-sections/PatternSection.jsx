import ReactMarkdown from "react-markdown";

const PatternSection = ({ patternSection, patternData }) => {
    const { markdown, sectionTitle } = patternSection;

    return (
        <div className="pattern-section">
            <div className="pattern-section-title"><p>{sectionTitle}</p></div>
            <div className="pattern-section-text">
                <ReactMarkdown >
                    {markdown}
                </ReactMarkdown></div>
        </div>
    );
};

export default PatternSection;