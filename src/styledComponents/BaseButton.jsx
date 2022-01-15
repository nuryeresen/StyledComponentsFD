import styled from "styled-components";
import { baseCss, padding } from "./baseCss";
const BaseButton = styled.button`
  color: ${({ theme }) => theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 10px 20px;
  ${padding};
  ${baseCss};
  cursor: pointer;
  border: 1px solid #222;
  border-radius: 10px;
  text-decoration: none;
`;
export { BaseButton };
