import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../component/BoxWithStyledComponents.js";

const BoxContainer = styled.div`
  display: flex;
  justisfy-content: space-between;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Hello World</h1>
      <BoxContainer>
        <BoxWithClassName isBlack={false} />
        <BoxWithClassName isBlack={true} />
        <BoxWithStyledComponents $isBlack={false} />
        <BoxWithStyledComponents $isBlack={true} />
      </BoxContainer>
    </div>
  );
}
