import { useEffect, useRef } from "react";
import styled from "styled-components";

const CustomCursorStyle = styled.div`
  width: 80px;
  height: 80px;
  background: transparent;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.005);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  position: fixed;
  z-index: 50;
  opacity: 0;
`;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.opacity = `1`;
        const x = clientX - cursorRef.current.clientWidth / 2;
        const y = clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    });
  });

  return <CustomCursorStyle ref={cursorRef} />;
};

export default CustomCursor;
