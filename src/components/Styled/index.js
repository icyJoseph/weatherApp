import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 2px 2px 4px 4px rgba(53, 53, 53, 0.65);
  animation: ${fadeIn} 2s ease-out;
`;

export const SvgContainer = styled.svg`
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "100px"};
`;

export const FlexSection = styled.div.attrs({
  style: props => ({
    ...props.style
  })
})`
  width: 100%;
  flex: ${props => props.flex || 1};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  color: ${props => props.color || "#54525d"};
  flex-direction: ${props => props.direction || "row"};
`;
