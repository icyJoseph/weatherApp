import styled from "styled-components";

export const FlexSection = styled.div`
  flex: ${props => props.flex || 1};
  display: flex;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "flex-start"};
  color: ${props => props.color || "white"};
`;
