import yarnSvg from "../homepage_assets/ball-of-wool-svgrepo-com.svg";
import jumperSvg from "../homepage_assets/jumper-thin.svg";
import knittingSvg from "../homepage_assets/knitting.svg";

const patternCreationMadeEasyCardData = [
  {
    svgIcon: yarnSvg,
    title: (
      <h3>
        Generate <span style={{ color: "rgb(126, 70, 136)" }}>bespoke</span>{" "}
        jumper patterns.
        </h3>
    ),
    text: (
      <p>
        Enter your measurements and generate{" "}
        <b>free jumper patterns fitted especially for you.</b>
      </p>
    ),
  },
  {
    svgIcon: jumperSvg,
    title: (
      <h3>
        Kick-start your{" "}
        <span style={{ color: "rgb(126, 70, 136)" }}>design process</span>!
      </h3>
    ),
    text: (
      <p>
        Pick between different <b>jumper shapes</b>, <b>levels of ease</b> and{" "}
        <b>neckline options</b>.
      </p>
    ),
  },
  {
    svgIcon: knittingSvg,
    title: (
      <h3>
        Start{" "}
        <span style={{ color: "rgb(126, 70, 136)" }}>saving your patterns</span>{" "}
        today.
      </h3>
    ),
    text: (
      <p>
        Create an account, it’s easy, and you only need a <b>username</b> to do
        so!
      </p>
    ),
  },
];



export { patternCreationMadeEasyCardData };