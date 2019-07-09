import React from 'react';
import CustomTable from './CustomTable';
import UserSearch from './UserSearch';

export default function UserTable() {
  return (
    <div>
      <UserSearch />
      <CustomTable />
    </div>
  );
}
