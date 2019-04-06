import styled from "styled-components";

export const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin: 1em 2em;
  height: 100%;

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  > span {
    display: flex;
  }

  > div > span {
    display: flex;
  }
`;

export const Input = styled.input`
  height: 100%;
  align-self: center;
  background: rgba(0, 0, 0, 0);
  border: none;
  color: #f8f8f8;
  border-bottom: 2px solid #f8f8f8;
  font-size: 1em;

  @media (min-width: 500px) {
    font-size: 1.15em;
  }

  @media (min-width: 700px) {
    font-size: 2.5em;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #f8f8f8;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const SearchButton = styled.a`
  display: flex;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0);
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
  border: 2px solid #f8f8f8;
  font-size: 2em;
`;

export const LoadingWrapper = styled.div`
  position: relative;

  > div {
    position: absolute;
    width: 100%;
  }

  > div > div {
    margin: 0 auto;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  color: #fc6363;
  background-color: white;
  border-radius: 50%;
  margin: ${({ noGutters }) => (noGutters ? "auto 0" : "0.75em")};
  padding: 0.45em;
  font-size: 1.75em;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 1.5s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }

  @media (max-width: 900px) {
    transition: box-shadow 1.5s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
    }

    &:active {
      box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  right: unset;
  justify-content: center;
  overflow: hidden;
  user-select: none;

  @media (max-width: 289px) {
    flex-direction: column;
    right: 0;
    width: unset;
  }
`;

export const Form = styled.form`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  margin: 0.25em 0 1em 0;
  padding: 0 0.25em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  > input {
    margin: 1em auto;
  }

  @media (min-width: 340px) {
    flex-direction: row;

    > input {
      margin: 0 1em 0 0;
    }
  }

  @media (max-width: 249px) {
    display: none;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0 0.25em;
  overflow: scroll;
  height: 100%;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WeatherWrap = styled.div`
  font-size: 2em;
`;

export const EmojiContainer = styled.div`
  text-align: center;
`;
