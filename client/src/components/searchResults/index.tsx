import { FC, useState } from 'react';
import * as React from 'react';
import './styles.css';
import {
  SBtn,
  Search,
  SearchField,
  SearchMain,
  SearchTitle,
  SRMain,
} from './styled';
import Masonry from 'react-masonry-css';
import Album from '../album';

const SearchResults: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [albums, setAlbums] = useState<any>([]);

  const searchAlbums = async () => {
    const res = await fetch(
      `http://localhost:8080/v1/search?q=${searchTerm}&type=album`,
      {
        headers: {
          method: 'get',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
          Content_type: 'application/json',
        },
      },
    );
    const data = await res.json();
    setAlbums(data.albums.items);
  };
  console.log(albums);
  return (
    <SRMain>
      <SearchMain>
        <SearchTitle>Search for an artist</SearchTitle>
        <Search>
          <SearchField
            placeholder={'Search...'}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SBtn onClick={searchAlbums}>Search</SBtn>
        </Search>
      </SearchMain>
      <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {albums.length > 0
          ? albums.map((album: any) => <Album key={album.id} album={album} />)
          : null}
      </Masonry>
    </SRMain>
  );
};

export default SearchResults;
