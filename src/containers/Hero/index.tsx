import { useEffect } from "react";
import { Wrapper, Title, Content } from "./styles";
import { RoughNotation } from "react-rough-notation";
import Button from "@/components/Button";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Content>
        <Title>
          <span className="intro">Hey folks 👋, I'm</span>
          <h1>Badr Kaztaoui</h1>
          <h2>
            <RoughNotation
              type="underline"
              color="var(--clr-primary)"
              padding={[0, 0, -8, 0]}
              strokeWidth={5}
              show
            >
              Creative
            </RoughNotation>{" "}
            frontend{" "}
            <RoughNotation
              type="box"
              color="var(--clr-primary)"
              padding={[9, 0, 0, 0]}
              strokeWidth={3}
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
