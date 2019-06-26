import React, { useState } from 'react';
import { Input, Button, Icon, Dialog, Message } from '@alifd/next';
import TopBar from '../../components/TopBar';
import GeneralDialog from '../../components/GeneralDialog';
import SmallCard from '../../components/SmallCard';
import styles from './index.module.scss';

export default function Repository() {
  const [repositoryData, setRepositoryData] = useState([{
    name: 'repository',
    desc: '一些简单的描述',
  }]);

  const handlePrePublish = () => {
    Dialog.confirm({
      title: '发布预发？',
      content:
        '确认要进行预发操作吗？预发需要几分钟的时间，预发完成后，即可在测试界面进行测试。',
    });
  };

  const handlePublish = () => {
    Dialog.confirm({
      title: '发布线上',
      content:
        '确认要进行发布操作吗？进行发布操作，会将当前预发环境发布到线上，可能会影响您的线上用户，请谨慎操作。',
    });
  };

  const handleConfig = () => {
    Message.error('暂不支持同义词配置');
  };

  const getFormValue = (value) => {
    const data = [...repositoryData];
    data.push({
      name: value.title,
      desc: value.desc,
    });
    setRepositoryData(data);
  };
  return (
    <div>
      <TopBar
        title="知识库"
        extraAfter={(
          <div style={{ display: 'flex' }}>
            <Button
              type="normal"
              style={{ marginRight: '10px' }}
              onClick={handlePrePublish}
            >
              <Icon type="process" />
              预发
            </Button>
            <Button
              type="normal"
              style={{ marginRight: '10px' }}
              onClick={handlePublish}
            >
              <Icon type="share" />
              发布
            </Button>
            <Button
              type="normal"
              style={{ marginRight: '10px' }}
              onClick={handleConfig}
            >
              同义词配置
            </Button>
            <GeneralDialog
              buttonText="新建知识库"
              getFormValue={getFormValue}
            />
          </div>
        )}
      />
      <div className={styles.searchContainer}>
        <Input
          style={{ width: '300px' }}
          placeholder="请输入关键词搜索知识库"
        />
      </div>
      <SmallCard data={repositoryData} />
    </div>
  );
}
