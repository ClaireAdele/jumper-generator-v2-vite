import "../Homepage.css";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faqList = [
    {
      question: "What type of pattern will I be able to generate?",
      answer: (
        <>
          <p className="faq-answer">The generator currently supports:</p>
          <ul id="faq-list-answer">
            <li>
              <b>Raglan jumpers knitted top-down</b>
            </li>
            <li>
              <b>Bottom-up jumpers with seamless yoke</b>
            </li>
            <li>
              <b>
                Seamed drop-shoulder jumpers, with two separate arm pieces and a
                body knit in the round
              </b>
            </li>
          </ul>
          <p className="faq-answer">
            <b>Different levels of ease are also included</b> — you can add your
            own manually, or pick a standardised amount. Over time, I am hoping
            to increase the complexity of the calculator and add more
            shapes/options — the first things I’ll be working on is support for
            stranded-colourwork patterns, with an option to input over how many
            stitches the charts are worked.
          </p>
        </>
      ),
    },
    {
      question: "What system do you use to calculate the patterns?",
      answer: (
        <>
          <p className="faq-answer">
            This website mostly relies on{" "}
            <b>
              Elizabeth’s Zimmerman’s approach to calculate the size of the
              jumper
            </b>
            . If you would like to find out more about it, you can follow{" "}
            <a
              className="ref-link"
              href="https://tutorials.knitpicks.com/percentage-system/"
            >
              this link
            </a>
            .
          </p>
          <p>
            It’s based on{" "}
            <b>percentages to keep the whole garment proportional</b>, and
            yields great results! I also offer extra customisation options, such
            as using your wrists, arms, and shoulders measurements instead of a
            percentage of the body if you’d prefer.
          </p>
        </>
      ),
    },
    {
      question: "How detailed/beginner-friendly will the patterns be?",
      answer: (
        <>
          <p className="faq-answer">
            The patterns produced are <b>beginner-friendly</b> and{" "}
            <b>explain all the construction steps</b>, so you could use this
            generator for <b>your first jumper!</b> I would recommend picking
            the top-down raglan jumper pattern if this is your first foray into
            knitting a jumper — they are very easy to adjust as you go, as you
            can try them on as you knit them. I will try my best to provide you
            with links to videos explaining the techniques used as well.
          </p>
          <p>
            Alternatively,{" "}
            <b>
              if you are a more experienced knitter/pattern designer who just
              wants some maths done to accelerate your design process
            </b>
            , I will put down all the stitch numbers/piece sizes/etc. at the top
            of the pattern, so you can use them to jump-start your
            process/calculate different sizes for your patterns.
          </p>
        </>
      ),
    },
    {
      question: "Why create an account?",
      answer: (
        <>
          <p className="faq-answer">
            Creating an account will let you{" "}
            <b>save the patterns you generate</b>, as well as{" "}
            <b>your measurements</b>, so that it's even{" "}
            <b>
              easier to use the generator the next time, or try different
              pattern permutations quickly.
            </b>
          </p>
          <p>
            I do not want to manage sensitive information, so all that is needed
            to register is a unique username — your patterns and measurements
            will be tied to that username only. Think of it like creating a
            virtual folder of patterns — all you have to do is remember what
            name you gave it.
          </p>
        </>
      ),
    },
  ];
  
  return (
    <div id="faq">
      {faqList.map((faqItem, index) => {
        return <FaqItem key={index} question={faqItem.question} answer={faqItem.answer} />
      }
      )};
    </div>
  );
};

export default Faq;
