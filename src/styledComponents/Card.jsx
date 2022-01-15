import styled from "styled-components";

const Card = styled.div`
  display: inline-flex;
  width: 70vh;
  background-color: ${({ theme }) => theme.CardColor};
  box-shadow: 5px 10px 18px #888888;
  border-radius: 35px;
  &:hover {
    background-color: red;
  }
`;
export { Card };
