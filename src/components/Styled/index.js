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

export const Form = styled.form`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Input = styled.input`
  width: 80%;
  padding: 0;
  margin: 15px 0 0 2.5%;
  boxsizing: border-box;
  position: absolute;
  height: 50px;
  background: rgba(0, 0, 0, 0);
  border: none;
  color: #f8f8f8;
  border-bottom: 2px solid #f8f8f8;
  font-size: 36pt;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #e9e9e9;
  }

  @media (max-width: 600px) {
    font-size: 16pt;
  }
`;

export const Button = styled.a`
  width: 12.5%;
  right: 0;
  padding: 0;
  margin: 10px 2.5% 0 2.5%;
  position: absolute;
  border-radius: 10px;
  height: 50px;
  background: rgba(0, 0, 0, 0);
  border: none;
  line-height: 50px;
  text-align: center;
  color: #f8f8f8;
  border: 2px solid #f8f8f8;
  font-size: 24pt;

  @media (max-width: 600px) {
    font-size: 16pt;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100px;
`;
