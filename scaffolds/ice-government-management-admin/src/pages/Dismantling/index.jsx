import React from 'react';
import Container from '@icedesign/container';
import SearchBar from './components/SearchBar';
import DismantlingTable from './components/DismantlingTable';
import styles from './index.module.scss';

export default function Dismantling() {
  return (
    <div>
      <div className={styles.nav}>
        <h2 className={styles.breadcrumb}>拆预收案</h2>
      </div>
      <SearchBar />
      <Container className={styles.container}>
        <DismantlingTable />
      </Container>
    </div>
  );
}
