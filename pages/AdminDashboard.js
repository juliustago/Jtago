import React from 'react';
import UserManagement from '../components/UserManagement';
import LandListingManagement from '../components/LandListingManagement';
import DisputeHandling from '../components/DisputeHandling';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserManagement />
      <LandListingManagement />
      <DisputeHandling />
    </div>
  );
};

export default AdminDashboard;
