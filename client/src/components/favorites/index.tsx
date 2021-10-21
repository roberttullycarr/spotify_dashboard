import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import FavItem from './favItem';
import { useQuery, UseQueryResult } from 'react-query';

const FavoritesMain = styled.div`
  width: 271px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FavBox = styled.div`
  width: 100%;
  height: 298px;
  overflow-y: scroll;
`;

const FavTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
`;

interface Props {
  reFetch: any;
  setReFetch: any;
}

const Favorites: FC<Props> = ({ reFetch, setReFetch }) => {
  const { status, error, data }: UseQueryResult<any> = useQuery<any>(
    ['favorites', reFetch],
    async () => {
      const res = await fetch('https://api.spotify.com/v1/me/albums', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
      });
      const data = await res.json();
      setReFetch('');
      return data.items;
    },
  );
  console.log(data);
  return (
    <FavoritesMain>
      <FavTitle>My Favorite Albums</FavTitle>
      <FavBox>
        {status === 'success' &&
          data.map((album: any) => (
            <FavItem key={album.album.id} album={album} />
          ))}
      </FavBox>
    </FavoritesMain>
  );
};

export default Favorites;
