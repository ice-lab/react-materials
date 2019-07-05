import React from 'react';
import { Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { withRouter } from 'react-router-dom';
import ContainerTitle from '@/components/ContainerTitle';
import styles from './index.module.scss';

const mockData = [
  {
    title: '环境搭建文档',
    description: '有关新人入门环境搭建的相关文档',
    time: '3小时前',
  },
  {
    title: '测试文档',
    description: '有关测试的相关文档',
    time: '12小时前',
  },
  {
    title: '环境搭建文档',
    description: '有关新人入门环境搭建的相关文档',
    time: '3小时前',
  },
  {
    title: '测试文档',
    description: '有关测试的相关文档',
    time: '12小时前',
  },
  {
    title: '环境搭建文档',
    description: '有关新人入门环境搭建的相关文档',
    time: '3小时前',
  },
  {
    title: '测试文档',
    description: '有关测试的相关文档',
    time: '12小时前',
  },
];

const DocsList = (props) => {
  const handleAdd = () => {
    console.log(123);
    props.history.push('/add/document');
  };

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle
        title="项目文档"
        buttonText="添加文档"
        onClick={() => handleAdd()}
      />
      <div className={styles.content}>
        {mockData.map((item, index) => {
          return (
            <a href="#" className={styles.item} key={index}>
              <Icon type="office" className={styles.icon} />
              <span className={styles.title}>{item.title}</span>
              <span className={styles.description}>{item.description}</span>
              <span className={styles.time}>{item.time}</span>
            </a>
          );
        })}
      </div>
    </IceContainer>
  );
};

export default withRouter(DocsList);
