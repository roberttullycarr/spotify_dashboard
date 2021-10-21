import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';

const FavItemMain = styled.div`
  width: 250px;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.101081);
  border-radius: 3px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px;
`;

const AlbumImage = styled.img`
  height: 80%;
`;

const AlbumData = styled.div`
  width: 70%;
  padding-left: 10px;
`;

const ATitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 !important;
`;

const AArtist = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(25, 20, 20, 0.684132);
  margin: 0 !important;
`;

interface Props {
  album: any;
}
const FavItem: FC<Props> = ({ album }) => {
  return (
    <FavItemMain>
      <AlbumImage src={album.album.images[2].url} />
      <AlbumData>
        <ATitle>{album.album.name}</ATitle>
        <AArtist>{album.album.artists[0].name}</AArtist>
      </AlbumData>
    </FavItemMain>
  );
};

export default FavItem;
