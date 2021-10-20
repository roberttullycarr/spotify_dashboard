import styled from 'styled-components';

export const ProfileMain = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export const Name = styled.h1`
  font-size: 60px;
  text-decoration: underline;
  margin: 0 !important;
`;

export const Info = styled.span``;

export const Facts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const AvatarMain = styled.div`
  height: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: fill;
`;

export const Avatar = styled.img`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
