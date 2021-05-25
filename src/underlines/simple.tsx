import styled, { keyframes } from "styled-components";

const animation = keyframes`
0% {
  width: 15px;
}
100% {
  width: 100%;
}
`;

const LowLine = styled.div`
  /* the line */
  border-top: 2px solid black;
  width: 15px;
  &:hover {
    animation-name: ${animation};
    animation-duration: 1000ms;
    /* persist animation at 100%*/
    animation-fill-mode: forwards;
    /* width: 100%; */
  }
  cursor: pointer;
`;

const Container = styled.div`
  width: auto;
  height: auto;
  padding: 6px;
  transition: background-color 1000ms;
  &:hover {
    background-color: orange;
  }
`;

const Paragraph = styled.p`
  font: arial;
  display: inline;
  font-size: 1.2rem;
  transition: text-decoration-color 300ms, text-underline-offset 300ms,
    background-color 300ms, text-decoration-style 300ms;
`;

export const Underline = ({ children }) => (
  <Container>
    <Paragraph>{children}</Paragraph>
    <LowLine />
  </Container>
);

export default Underline;
