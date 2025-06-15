import raglanJumperBody from "./jumper-selection-img-layers/raglan_jumper_body.png";
import raglanJumperRoundNeck from "./jumper-selection-img-layers/raglan_round_neckline (1).png";
import raglanJumperVNeck from "./jumper-selection-img-layers/raglan_v_neck (1).png";
import raglanJumperBoatNeckline from "./jumper-selection-img-layers/raglan_boat_neckline (1).png";
import dropShoulderBody from "./jumper-selection-img-layers/drop_shoulder_body.png";
import dropShoulderRoundNeckline from "./jumper-selection-img-layers/drop_shoulder_round_neckline.png";
import dropShoulderVNeck from "./jumper-selection-img-layers/drop_shoulder_v_neck.png";
import dropShoulderBoatNeckline from "./jumper-selection-img-layers/drop_shoulder_boat_neckline.png";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { useRef, useState, useEffect, useContext } from "react";
import { FinalJumperDataContext } from "../../../contexts/FinalJumperDataContext";

const URLImage = ({ src, ...rest }) => {
  const [image] = useImage(src, "anonymous");
  return <Image image={image} {...rest} />;
};

const JumperSelectionCanvas = () => {
  const jumperSelectionCanvasRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { finalJumperData, setFinalJumperData } = useContext(
    FinalJumperDataContext
  );
  const [imageNode, setImageNode] = useState([]);

  useEffect(() => {
    const resize = () => {
      if (jumperSelectionCanvasRef.current) {
        setDimensions({
          width: jumperSelectionCanvasRef.current.offsetWidth,
          height: jumperSelectionCanvasRef.current.offsetHeight,
        });
      }
    };

    resize(); // Initial size
    window.addEventListener('resize', resize); // Resize on window change
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [jumperSelectionCanvasRef.current]);


  useEffect(() => {
    const jumperLayers = [];
    let jumperShape = finalJumperData.jumperShape; 
    let necklineShape = finalJumperData.necklineShape; 

    console.log(finalJumperData);
    console.log(jumperLayers);

    if (!necklineShape && !jumperShape) { 
      jumperShape = "top-down-raglan"
      necklineShape = "round-neck"
    }


    if (jumperShape === "top-down-raglan" || jumperShape === "bottom-up") {
      jumperLayers.push(<URLImage
      key="raglanBody"
      src={raglanJumperBody}
      x={0}
      width={dimensions.width}
      height={dimensions.height}
    />)
    }

    if (jumperShape === "drop-shoulder") {
      jumperLayers.push(<URLImage
      key="dropShoulderBody"
      src={dropShoulderBody}
      x={0}
      width={dimensions.width}
      height={dimensions.height}
    />)
    }

    if (jumperShape === "drop-shoulder" && !necklineShape) {
        jumperLayers.push(<URLImage
          key="dropShoulderRoundNeckline"
          src={dropShoulderRoundNeckline}
          x={0}
          width={dimensions.width}
          height={dimensions.height}
        />)
    }

    if ((jumperShape === "bottom-up" || jumperShape === "top-down-raglan") && !necklineShape) {
      jumperLayers.push(<URLImage
        key="raglanJumperDefaultNeckline"
        src={raglanJumperRoundNeck}
        x={0}
        width={dimensions.width}
        height={dimensions.height}
      />)
  }
    
    if ((necklineShape === "round-neck" || necklineShape === "folded-neckline") && (jumperShape === "bottom-up" || jumperShape === "top-down-raglan")) {
      jumperLayers.push(<URLImage
      key="raglanRoundNeck" src={raglanJumperRoundNeck}
      x={0}
      width={dimensions.width}
      height={dimensions.height} />)
    }

    if (necklineShape === "boat-neck" && (jumperShape === "bottom-up" || jumperShape === "top-down-raglan")) {
      jumperLayers.push(<URLImage
      key="raglanBoatNeck" src={raglanJumperBoatNeckline}
      x={0}
      width={dimensions.width}
      height={dimensions.height} />)
    }

    if (necklineShape === "v-shape" && (jumperShape === "bottom-up" || jumperShape === "top-down-raglan")) {
      jumperLayers.push(
        <URLImage
          key="raglanVNeck" src={raglanJumperVNeck}
          x={0}
          width={dimensions.width}
          height={dimensions.height} />
      )
    }

    if ((necklineShape === "round-neck" || necklineShape === "folded-neckline") && jumperShape === "drop-shoulder") {
      jumperLayers.push(<URLImage
      key="dropShoulderRoundNeckline" src={dropShoulderRoundNeckline}
      x={0}
      width={dimensions.width}
      height={dimensions.height} />)
    }

    console.log(necklineShape)
    console.log(jumperShape)

    if (necklineShape === "boat-neck" && jumperShape === "drop-shoulder") {
      jumperLayers.push(<URLImage
      key="dropShoulderBoatNeckline" src={dropShoulderBoatNeckline}
      x={0}
      width={dimensions.width}
      height={dimensions.height} />)
    }

    if (necklineShape === "v-shape" && jumperShape === "drop-shoulder") {
      jumperLayers.push(<URLImage
      key="dropShoulderVNeck" src={dropShoulderVNeck}
      x={0}
      width={dimensions.width}
      height={dimensions.height} />)
    }


    console.log(jumperLayers);
   
    setImageNode(jumperLayers);
  

  }, [finalJumperData, dimensions]);

  console.log(imageNode);

  return (
    <div ref={jumperSelectionCanvasRef} id="jumper-selection-canvas" >
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          {imageNode}
        </Layer>
      </Stage>
      </div>
    );
}

export default JumperSelectionCanvas;

// [
//   <URLImage key="body" src={raglanJumperBody} x={0} width={dimensions.width} height={dimensions.height} />,
//   <URLImage key="neck" src={raglanJumperRoundNeck} x={0} width={dimensions.width} height={dimensions.height} />
// ]