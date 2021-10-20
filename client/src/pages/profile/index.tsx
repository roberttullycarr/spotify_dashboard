import React from 'react';
import Navigation from '../../components/Navigation';
import { useQuery, UseQueryResult } from 'react-query';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Section } from '../../components/section';
import {
  Avatar,
  AvatarMain,
  DataMain,
  Facts,
  Info,
  Name,
  ProfileMain,
} from '../../components/section/styled';

const Profile = () => {
  const { status, error, data }: UseQueryResult<any> = useQuery<any>(
    'user',
    async () => {
      const res = await fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
      });
      return res.json();
    },
  );
  console.log(data);
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="The profile page" />
      </Helmet>
      <Navigation />
      <Section>
        {status === 'success' && (
          <ProfileMain>
            <AvatarMain>
              <Avatar src={data.images[0].url} />
            </AvatarMain>
            <DataMain>
              <Name>{data.display_name}</Name>
              <Facts>
                <Info>{`Country: ${data.country}`}</Info>
                <Info>{`Account: ${data.product}`}</Info>
                <Info>{`Followers: ${data.followers.total}`}</Info>
              </Facts>
            </DataMain>
          </ProfileMain>
        )}
      </Section>
    </>
  );
};

export default Profile;
