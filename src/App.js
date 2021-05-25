import "./styles.css";
import { Underline } from "./underlines/simple";
import { Jig } from "./underlines/jig";
import styled, { keyframes } from "styled-components";

// TODO: Make the animation on the hover of the parent (figure out how)

export default function App() {
  return (
    <ScreenWrapper>
      <TextWrapper>
        <Underline>
          As you shall see when hovering over me, I underline.
        </Underline>
        <Spacer />
        <Jig>I underline too and am, I admit, rather proud of it.</Jig>
      </TextWrapper>
    </ScreenWrapper>
  );
}

const ScreenWrapper = styled.div`
  background: linear-gradient(45deg, turquoise, hotpink, deeppink);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Spacer = styled.div`
  padding-top: 10px;
`;
