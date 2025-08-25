import useInView from "../../../custom-hooks/useInView";

const PatternCreationCard = ({ svgIcon, title, text }) => {
  const [patternCreationCardRef, isVisible] = useInView();

  return (
    <div ref={patternCreationCardRef} className={isVisible ? "pattern-creation-card pattern-creation-card-visible" : "pattern-creation-card pattern-creation-card-invisible"}>
      <img className="svgImg" src={svgIcon}></img>
      {title}
      {text}
    </div>
  );
};

export default PatternCreationCard;