import raglanJumperBody from "./jumper-selection-img-layers/raglan_jumper_body.png";
import raglanJumperRoundNeck from "./jumper-selection-img-layers/raglan_round_neckline (1).png";
import raglanJumperVNeck from "./jumper-selection-img-layers/raglan_v_neck (1).png";
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

    if (!finalJumperData.jumperShape &&
      !finalJumperData.necklineShape) { 
      jumperLayers.push(
        <URLImage
          key="body"
          src={raglanJumperBody}
          x={0}
          width={dimensions.width}
          height={dimensions.height}
        />)
      jumperLayers.push(
        <URLImage
          key="neck" src={raglanJumperRoundNeck}
          x={0}
          width={dimensions.width}
          height={dimensions.height} />
      );
    }
    
    if (finalJumperData.jumperShape === "top-down-raglan") {
      jumperLayers.push(<URLImage
      key="body"
      src={raglanJumperBody}
      x={0}
      width={dimensions.width}
      height={dimensions.height}
    />)
    }
    
    if (finalJumperData.necklineShape === "round-neck") {
      jumperLayers.push(<URLImage
      key="neck" src={raglanJumperRoundNeck}
      x={0}
      width={dimensions.width}
      height={dimensions.height} />)
    }

    if (finalJumperData.necklineShape === "v-shape") { 
      jumperLayers.push(
        <URLImage
        key="neck" src={raglanJumperVNeck}
        x={0}
        width={dimensions.width}
          height={dimensions.height} />
      )
    }
   
    setImageNode(jumperLayers);
  

  }, [finalJumperData, dimensions]);


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