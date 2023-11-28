import React, { FC } from 'react';
import { Grid, TabPanel } from '@chakra-ui/react';
import TeamCard from '@/components/molecules/TeamCard';

type TeamMembersProps = {};

const TeamMembers: FC<TeamMembersProps> = () => {
  return (
    <TabPanel padding={0}>
      <Grid
        display="grid"
        templateColumns={{
          base: 'repeat(auto-fit, minmax(283px, 1fr))',
          md: 'repeat(auto-fit, minmax(350px, 1fr))',
        }}
        gridGap={{ base: '16px', sm: '20px' }}>
        {Array.from({ length: 6 }, () => ({
          firstName: 'First Name',
          lastName: 'Last Name',
          hobby: 'Dog Lover',
          position: 'Web Developer',
        })).map((teamMember, i: number) => (
          <TeamCard {...teamMember} key={i} />
        ))}
      </Grid>
    </TabPanel>
  );
};

export default TeamMembers;
