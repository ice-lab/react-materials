import React, { useState } from 'react';
import { Dialog } from '@alifd/next';
import TopBar from '@/components/TopBar';
import PublishTable from './components/PublishTable';
import Overview from './components/Overview';
import styles from './index.module.scss';

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      time: `2018-12-1${index} 1${index}:28:38`,
      desc: '发布备注信息',
    };
  });
};

export default function Projects() {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(getData());

  const handlePublish = () => {
    Dialog.confirm({
      title: '提示',
      content: '没有需要发布的项目',
    });
  };

  return (
    <div>
      <TopBar className={styles.topbar}
        extraBefore={<Overview />}
        buttonText="发布项目"
        onClick={handlePublish}
      />
      <div style={{ height: '40px' }} />
      <PublishTable data={projects} />
    </div>
  );
}
