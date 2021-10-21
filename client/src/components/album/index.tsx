import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Heart } from '../../assets/svg/heart_icon.svg';

const AlbumMain = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  object-fit: contain;

  div {
    display: none;
  }
  :hover {
    div {
      display: flex !important;
    }
  }
`;

const AlbumCover = styled.img`
  height: 100%;
  width: 100%;
`;

const LikeMain = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.palette.neutral03};
  opacity: 50%;
  z-index: 5;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    height: 40%;
    fill: red;
    z-index: 6;
  }
`;

interface Props {
  album: any;
}

const Album: FC<Props> = ({ album }) => {
  return (
    <AlbumMain>
      <AlbumCover src={album.images[1].url} />
      <LikeMain>
        <Heart />
      </LikeMain>
    </AlbumMain>
  );
};

export default Album;
