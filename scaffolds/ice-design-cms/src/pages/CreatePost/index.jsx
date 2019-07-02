import React from 'react';
import ContentEditor from './components/ContentEditor';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';

const CreatePost = () => {
  const breadcrumb = [
    { text: '文章管理', link: '' },
    { text: '添加文章', link: '#/post/create' },
  ];
  return (
    <div className="create-post-page">
      <CustomBreadcrumb dataSource={breadcrumb} />
      <ContentEditor />
    </div>
  );
};

export default CreatePost;
