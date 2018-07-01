import styled from "styled-components";

export const FlexSection = styled.div.attrs({
  style: props => ({
    ...props.style
  })
})`
  flex: ${props => props.flex || 1};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  color: ${props => props.color || "#54525d"};
  flex-direction: ${props => props.direction || "row"};
`;
