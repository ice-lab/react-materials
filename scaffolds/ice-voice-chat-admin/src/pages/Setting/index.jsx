import React from 'react';
import TopBar from '@/components/TopBar';
import InfoForm from './components/InfoForm';

export default function Setting() {
  return (
    <div>
      <TopBar title="基本设置" />
      <InfoForm />
    </div>
  );
}
