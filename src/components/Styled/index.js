import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  padding: 10% 10% 0% 10%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 2px 2px 4px 4px rgba(53, 53, 53, 0.65);
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
