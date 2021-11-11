import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

function Card({ children }) {
  return <Container>{children}</Container>;
}

export default Card;
