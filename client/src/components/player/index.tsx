import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Back } from '';

const PlayerMain = styled.div`
  position: relative;
  height: 331px;
  width: 280px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

const PTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0 !important;
`;

const ControlMain = styled.div`
  width: 280px;
  aspect-ratio: 1 /1;
  position: absolute;
  bottom: 0;
  border: 1px solid red;
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 0.0001) 0%,
    #000000 100%
  );
`;

const PAlbum = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const PDataMain = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 30%;
  border: 1px solid blue;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 60%;
  border: 1px solid yellow;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: flex-start;
  border: 1px solid green;
`;

const Player: FC = () => {
  return (
    <PlayerMain>
      <PTitle>Currently Playing</PTitle>
      <ControlMain>
        <PAlbum
          src={
            'https://i.scdn.co/image/ab67616d00001e020a1dfe2893823501b045319d'
          }
        />
        <PDataMain>
          <SongInfo />
          <Controls />
        </PDataMain>
      </ControlMain>
    </PlayerMain>
  );
};

export default Player;
