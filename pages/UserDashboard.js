import React from 'react';
import UserAccount from '../components/UserAccount';
import LandListingManagement from '../components/LandListingManagement';
import LeaseAgreementManagement from '../components/LeaseAgreementManagement';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserAccount />
      <LandListingManagement />
      <LeaseAgreementManagement />
    </div>
  );
};

export default UserDashboard;
