import { FC, useState } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Skip } from '../../assets/svg/skip_button.svg';
import { ReactComponent as Play } from '../../assets/svg/play_button.svg';
import { ReactComponent as Pause } from '../../assets/svg/pause_button.svg';
import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

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
  white-space: nowrap;
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
  const { status, error, data }: UseQueryResult<any> = useQuery<any>(
    ['playing'],
    async () => {
      const res = await fetch('https://api.spotify.com/v1/me/player', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
      });
      const data = await res.json();
      return data.item;
    },
  );

  const playHandler = () => setPlay(!play);

  return (
    <PlayerMain>
      <PTitle>Currently Playing</PTitle>
      {status === 'success' && (
        <ControlMain>
          <PAlbum src={data.album.images[1].url} />
          <PDataMain>
            <SongInfo>
              <ArtistAlbumName>{data.album.artists[0].name}</ArtistAlbumName>
              <SongName>{data.name}</SongName>
              <ArtistAlbumName>{data.album.name}</ArtistAlbumName>
            </SongInfo>
            <Controls>
              <BackBtn>
                <Skip />
              </BackBtn>
              <ControlBtn onClick={() => playHandler}>
                {play ? <Play /> : <Pause />}
              </ControlBtn>
              <ControlBtn>
                <Skip />
              </ControlBtn>
            </Controls>
          </PDataMain>
        </ControlMain>
      )}
    </PlayerMain>
  );
};

export default Player;
