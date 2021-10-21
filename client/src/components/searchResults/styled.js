import styled from 'styled-components';

export const SRMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTitle = styled.p`
  font-weight: 400;
  font-size: 36px;
  margin: 0 !important;
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
`;

export const SBtn = styled.button`
  width: 10%;
  background: ${({ theme }) => theme.palette.global01};
  color: ${({ theme }) => theme.palette.neutral01};
  border: none;
  border-radius: 16px;
  margin-left: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const SearchField = styled.input`
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
