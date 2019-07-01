import React from 'react';
import Filter from './components/Filter';
import Content from './components/Content';

export default function TestManagement() {
  return (
    <div>
      <Filter />
      <Content />
    </div>
  );
}

TestManagement.displayName = 'TestManagement';
