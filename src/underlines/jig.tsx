import styled, { keyframes } from "styled-components";
// NOT FINISHED

const animation = keyframes`
0% {
  width: 40px;
}
30% {
  width: 100px;
}
80% {
  margin-left: 15px;
}
}
100% {
  margin-left: 25px;
}
`;

const LowLine = styled.div`
  width: 40px;
  border-top: 2px solid black;
  &:hover {
    animation-name: ${animation};
    animation-duration: 1200ms;
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

export const Jig = ({ children }) => (
  <Container>
    <Paragraph>{children}</Paragraph>
    <LowLine />
  </Container>
);

export default Jig;
