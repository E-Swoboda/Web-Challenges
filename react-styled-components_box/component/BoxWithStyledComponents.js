import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid black;
  padding: 20px;
  transition: background-color 0.3s;
  cursor: pointer;
  margin: 2rem;

  &:hover {
    background-color: green;
  }

  ${(props) =>
    props.$isBlack &&
    `
background-color: black;
color: white;
`}
`;
export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}>Styled Box</StyledBox>;
}
