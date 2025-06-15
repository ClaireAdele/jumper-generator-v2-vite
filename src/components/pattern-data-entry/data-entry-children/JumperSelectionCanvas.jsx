import { useRef, useState, useEffect, useContext } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { FinalJumperDataContext } from "../../../contexts/FinalJumperDataContext";

// Image imports
import raglanBody from "./jumper-selection-img-layers/raglan_jumper_body.png";
import raglanRound from "./jumper-selection-img-layers/raglan_round_neckline (1).png";
import raglanV from "./jumper-selection-img-layers/raglan_v_neck (1).png";
import raglanBoat from "./jumper-selection-img-layers/raglan_boat_neckline (1).png";
import dropShoulderBody from "./jumper-selection-img-layers/drop_shoulder_body.png";
import dropShoulderRound from "./jumper-selection-img-layers/drop_shoulder_round_neckline.png";
import dropShoulderV from "./jumper-selection-img-layers/drop_shoulder_v_neck.png";
import dropShoulderBoat from "./jumper-selection-img-layers/drop_shoulder_boat_neckline.png";

const URLImage = ({ src, ...props }) => {
  const [image] = useImage(src, "anonymous");
  return <Image image={image} {...props} />;
};

const IMAGE_MAP = {
  "top-down-raglan": {
    body: raglanBody,
    neckline: {
      "round-neck": raglanRound,
      "folded-neckline": raglanRound,
      "v-shape": raglanV,
      "boat-neck": raglanBoat,
    },
    defaultNeckline: raglanRound,
  },
  "bottom-up": {
    body: raglanBody,
    neckline: {
      "round-neck": raglanRound,
      "folded-neckline": raglanRound,
      "v-shape": raglanV,
      "boat-neck": raglanBoat,
    },
    defaultNeckline: raglanRound,
  },
  "drop-shoulder": {
    body: dropShoulderBody,
    neckline: {
      "round-neck": dropShoulderRound,
      "folded-neckline": dropShoulderRound,
      "v-shape": dropShoulderV,
      "boat-neck": dropShoulderBoat,
    },
    defaultNeckline: dropShoulderRound,
  },
};

const JumperSelectionCanvas = () => {
  const canvasRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [layers, setLayers] = useState([]);
  const { finalJumperData } = useContext(FinalJumperDataContext);

  useEffect(() => {
    const resize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);


  useEffect(() => {
    let { jumperShape, necklineShape } = finalJumperData;

    if (!jumperShape && !necklineShape) {
      jumperShape = "top-down-raglan";
      necklineShape = "round-neck";
    }

    const shapeConfig = IMAGE_MAP[jumperShape];
    const jumperImgLayers = [];

    if (shapeConfig.body) {
      jumperImgLayers.push(
        <URLImage
          key="body"
          src={shapeConfig.body}
          x={0}
          width={dimensions.width}
          height={dimensions.height}
        />
      );
    }

    const necklineImage =
      shapeConfig.neckline[necklineShape] || shapeConfig.defaultNeckline;

    if (necklineImage) {
      jumperImgLayers.push(
        <URLImage
          key="neckline"
          src={necklineImage}
          x={0}
          width={dimensions.width}
          height={dimensions.height}
        />
      );
    }

    setLayers(jumperImgLayers);
  }, [finalJumperData, dimensions]);

  return (
    <div ref={canvasRef} id="jumper-selection-canvas">
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>{layers}</Layer>
      </Stage>
    </div>
  );
};

export default JumperSelectionCanvas;