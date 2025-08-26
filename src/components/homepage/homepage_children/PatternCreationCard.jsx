import useInView from "../../../custom-hooks/useInView";

const PatternCreationCard = ({ svgIcon, title, text }) => {

  return (
    <div className="pattern-creation-card stagger-item">
      <img className="svgImg" src={svgIcon}></img>
      {title}
      {text}
    </div>
  );
};

export default PatternCreationCard;