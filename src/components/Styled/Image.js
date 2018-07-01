import styled from "styled-components";

export const Image = styled.img.attrs({
  style: props => ({ ...props })
})`
  width: 500px;

  @media (max-width: 600px) {
    width: 350px;
  }
`;
