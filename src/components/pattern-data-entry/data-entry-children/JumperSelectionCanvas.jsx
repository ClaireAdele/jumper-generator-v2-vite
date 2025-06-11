import raglanJumperBody from "./jumper-selection-img-layers/raglan_jumper_body.png";
import raglanJumperRoundNeck from "./jumper-selection-img-layers/raglan_round_neckline (1).png";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { useRef, useState, useEffect } from "react";

const URLImage = ({ src, ...rest }) => {
  const [image] = useImage(src, "anonymous");
  return <Image image={image} {...rest} />;
};

const JumperSelectionCanvas = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const bool = true;

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    resize(); // Initial size
    window.addEventListener('resize', resize); // Resize on window change
    return () => window.removeEventListener('resize', resize);
  }, []);

  console.log(dimensions);

  return (
    <div ref={containerRef} id="jumper-selection-canvas" >
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
        {bool
          ? [
              <URLImage key="body" src={raglanJumperBody} x={0} width={dimensions.width} height={dimensions.height} />,
              <URLImage key="neck" src={raglanJumperRoundNeck} x={0} width={dimensions.width} height={dimensions.height} />
            ]
          : <URLImage src={raglanJumperBody} x={150} />
        }
        </Layer>
      </Stage>
      </div>
    );
}

export default JumperSelectionCanvas;