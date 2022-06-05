import Button from "@/components/Button";
import { Wrapper, Title, Content, Word, Char } from "./styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const animate = useAnimation();

  const title = "Badr Kaztaoui.";
  const subTitle = "Creative frontend developer";

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) animate.start("visible");
    if (!inView) animate.start("hidden");
  }, [animate, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Wrapper>
      <Content>
        <Title>
          <span className="intro">Hey folks, I'm</span>
          <h1>
            {title.split(" ").map((word, index) => (
              <Word
                key={`word#${index}`}
                ref={ref}
                aria-hidden="true"
                initial="hidden"
                animate={animate}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.15,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((char, index) => (
                  <Char
                    key={`char#${index}`}
                    // aria-hidden="true"
                    variants={characterAnimation}
                  >
                    {char}
                  </Char>
                ))}
              </Word>
            ))}
          </h1>
          <h2>Creative frontend developer</h2>
        </Title>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni id eos
          et excepturi asperiores totam qui harum ratione molestiae accusantium,
          facere expedita ea quaerat tempore quae eum nulla, at dolore!
        </p>
        <Button label="Download Resume" status="primary" fill />
      </Content>
    </Wrapper>
  );
};

export default Hero;
