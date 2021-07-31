import React from "react";
import styled from "styled-components";

function Game({ image, title, platform, percent }) {
  return (
    <GameContainer>
      <GameImage src={image} />
      <GameTextContainer>
        <GameTitle>{title}</GameTitle>
        <Platform>{platform}</Platform>
        <ProgressBAR value={percent} max="100" />
      </GameTextContainer>
      <Percent>{percent}%</Percent>
    </GameContainer>
  );
}
const GameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  width: 140%;
  border-radius: 1rem;
  height: 7rem;
`;

const GameImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;
`;

const GameTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
`;

const GameTitle = styled.h2`
  font-size: 1.4rem;
`;

const Platform = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

const ProgressBAR = styled.progress`
  border-radius: 0;
  width: 100%;
  height: 1.3em;

  &::-webkit-progress-bar {
    background-color: #c5c5c5;
    border-radius: 1rem;
  }
  &::-webkit-progress-value {
    background: #ee0979;
    background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
    background: linear-gradient(to right, #ff6a00, #ee0979);
    border-radius: 1rem;
  }
`;

const Percent = styled.h2`
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ee093b,
    #ee0979
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ee093b,
    #ee0979
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Game;
