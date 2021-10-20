import React from 'react';
import { useQuery } from 'react-query';

const FetchUser = async () => {
  const body = { token: localStorage.token };
  const res = await fetch('http://localhost:8080/v1/me');
};

const Profile: React.FC = () => {
  console.log(localStorage.token);
  const { data, status } = useQuery('user', FetchUser);
  return (
    <>
      <h1>profile body</h1>
    </>
  );
};

export default Profile;
