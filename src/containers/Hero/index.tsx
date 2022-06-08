import { useEffect, useRef } from "react";
import { Wrapper, Title, Content } from "./styles";
import { RoughNotation } from "react-rough-notation";
import Button from "@/components/Button";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Content>
        <Title>
          <span className="intro">Hey folks 👋, I'm</span>
          <h1 ref={titleRef}>Badr Kaztaoui</h1>
          <h2>
            <RoughNotation
              type="underline"
              color="var(--clr-primary)"
              padding={[0, 0, -6, 0]}
              strokeWidth={4}
              show
            >
              Creative
            </RoughNotation>{" "}
            frontend{" "}
            <RoughNotation
              type="box"
              color="var(--clr-primary)"
              padding={[12, 0, 0, 0]}
              strokeWidth={2}
              animationDelay={1000}
              show
            >
              developer
            </RoughNotation>
          </h2>
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
