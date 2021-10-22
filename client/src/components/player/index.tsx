import { FC, useState } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Skip } from '../../assets/svg/skip_button.svg';
import { ReactComponent as Play } from '../../assets/svg/play_button.svg';
import { ReactComponent as Pause } from '../../assets/svg/pause_button.svg';

const PlayerMain = styled.div`
  position: relative;
  height: 331px;
  width: 280px;
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
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  width: 60%;
  padding: 10px 0 10px 10px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 40%;
  align-items: flex-end;
  padding: 10px 6px;
`;

const ControlBtn = styled.button`
  height: 20px;
  width: 20px;
  display: flex;
  padding: 0 !important;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  svg {
    height: 90%;
    margin: 0 !important;
    fill: white;
  }
`;

const BackBtn = styled(ControlBtn)`
  transform: scaleX(-1);
`;

const SongDetails = styled.p`
  color: white;
  margin: 0 !important;
  overflow: hidden;
  opacity: 75%;
`;

const ArtistAlbumName = styled(SongDetails)`
  font-size: 14px;
`;

const SongName = styled(SongDetails)`
  font-size: 18px;
`;

const Player: FC = () => {
  const [play, setPlay] = useState<boolean>(false);
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
          <SongInfo>
            <ArtistAlbumName>Less Than Jake</ArtistAlbumName>
            <SongName>Hello, Rockview</SongName>
            <ArtistAlbumName>Rockview</ArtistAlbumName>
          </SongInfo>
          <Controls>
            <BackBtn>
              <Skip />
            </BackBtn>
            <ControlBtn onClick={() => setPlay(!play)}>
              {play ? <Play /> : <Pause />}
            </ControlBtn>
            <ControlBtn>
              <Skip />
            </ControlBtn>
          </Controls>
        </PDataMain>
      </ControlMain>
    </PlayerMain>
  );
};

export default Player;
