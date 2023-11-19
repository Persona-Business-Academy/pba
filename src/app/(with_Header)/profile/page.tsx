import React from 'react';
import ProfilePage from '@/components/templates/ProfilePage';
import { serverSession } from '@/pages/api/auth/[...nextauth]';

const Profile = async () => {
  const session = await serverSession();
  return <ProfilePage user={session?.user || null} />;
};

export default Profile;
