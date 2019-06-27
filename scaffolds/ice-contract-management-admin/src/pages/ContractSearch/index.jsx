import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import ContractTable from '@/components/ContractTable';

export default function ContractSearch() {
  const [searchQuery, setSearchQuery] = useState({});

  function onSearch(query) {
    setSearchQuery(query);
  }

  return (
    <IceContainer>
      <ContractTable searchQuery={searchQuery} />
    </IceContainer>
  );
}
