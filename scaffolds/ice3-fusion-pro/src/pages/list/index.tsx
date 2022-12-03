import { definePageConfig } from 'ice';
import { Button } from '@alifd/next';
import React from 'react';

interface GithubRepoItem {
  url: string;
  id: number;
  name: string;
  star: string;
  description: string;
}

// const columns: Array<GithubRepoItem & { title: string; ellipsis?: boolean; dataIndex: string; width?: number }> = [
//   {
//     title: 'id',
//     dataIndex: 'id',
//     ellipsis: true,
//     width: 80,
//   },
//   {
//     title: '名称',
//     dataIndex: 'name',
//     width: 200,
//   },
//   {
//     title: 'Stars',
//     dataIndex: 'star',
//     width: 200,
//   },
//   {
//     title: '描述',
//     dataIndex: 'description',
//   },
//   {
//     title: '操作',
//     valueType: 'option',
//     key: 'option',
//     width: 200,
//     render: (text, record, _, action) => [
//       <a
//         key="editable"
//         onClick={() => {
//           action?.startEditable?.(record.id);
//         }}
//       >
//         编辑
//       </a>,
//       <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
//         查看
//       </a>,
//     ],
//   },
// ];

const TableList: React.FC = () => {
  return (
    <>List</>
  );
};

export default TableList;

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin'],
  };
});
