import styled from "styled-components";

export const Image = styled.img.attrs({
  style: props => ({ ...props })
})`
  margin: 0 auto;
  height: 300px;
  width: auto;

  @media (min-width: 700px) {
    height: 300px;
    width: auto;
  }
`;
