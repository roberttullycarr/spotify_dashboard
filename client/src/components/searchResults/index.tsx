import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';

const SRMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchTitle = styled.p`
  font-weight: 400;
  font-size: 36px;
  margin: 0 !important;
`;

const SearchField = styled.input`
  width: 30%;
  height: 32px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.neutral03};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.101081);
  padding: 0 20px;

  :focus {
    outline: none;
  }
`;

const SearchResults: FC = () => {
  return (
    <SRMain>
      <SearchMain>
        <SearchTitle>Search for an artist</SearchTitle>
        <SearchField placeholder={'Search...'} />
      </SearchMain>
    </SRMain>
  );
};

export default SearchResults;
