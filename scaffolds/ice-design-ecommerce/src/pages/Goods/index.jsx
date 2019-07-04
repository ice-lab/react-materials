import React from 'react';
import IceContainer from '@icedesign/container';
import CustomTable from '../../components/CustomTable';

const defaultSearchQuery = {
  id: '',
  group: '',
  type: '',
  sales: '',
  price: '',
};

const formConfig = [
  {
    label: '商品编号',
    component: 'Input',
    componentProps: {
      placeholder: '请输入商品编号',
    },
    formBinderProps: {
      name: 'id',
      required: false,
      message: '请输入正确的商品编号',
    },
  },
  {
    label: '商品分组',
    component: 'Select',
    componentProps: {
      placeholder: '请选择',

      dataSource: [
        { label: '全部', value: '0' },
        { label: '电器', value: '1' },
        { label: '数码', value: '2' },
        { label: '家居', value: '3' },
      ],
    },
    formBinderProps: {
      name: 'group',
    },
  },
  {
    label: '商品类型',
    component: 'Select',
    componentProps: {
      placeholder: '请选择',

      dataSource: [
        { label: '实物商品', value: '1' },
        { label: '虚拟商品', value: '2' },
      ],
    },
    formBinderProps: {
      name: 'type',
    },
  },
  {
    label: '商品销量',
    component: 'Input',
    componentProps: {
      placeholder: '请输入卡号',
    },
    formBinderProps: {
      name: 'sales',
      required: false,
      message: '请输入正确的卡号',
    },
  },
  {
    label: '商品价格',
    component: 'Input',
    componentProps: {
      placeholder: '请输入',
    },
    formBinderProps: {
      name: 'price',
    },
  },
];

const random = (min, max) => {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
};

const mockData = Array.from({ length: 10 }).map(() => {
  return {
    id: random(10000, 100000),
    inventory: random(5000, 8000),
    group: ['电器', '数码', '家居'][random(0, 2)],
    type: ['实物商品', '虚拟商品'][random(0, 1)],
    sales: random(1000, 2000),
    price: random(5000, 10000),
    createTime: '2018-11-11',
  };
});

export default function Goods() {
  function getTableColumns() {
    return [
      {
        title: '商品编号',
        dataIndex: 'id',
        key: 'id',
        lock: true,
      },
      {
        title: '商品分组',
        dataIndex: 'group',
        key: 'group',
      },
      {
        title: '库存',
        dataIndex: 'inventory',
        key: 'inventory',
      },
      {
        title: '商品类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '商品销量',
        dataIndex: 'sales',
        key: 'sales',
      },
      {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
      },
    ];
  }

  return (
    <IceContainer title="商品管理">
      <CustomTable
        columns={getTableColumns()}
        dataSource={mockData}
        searchQueryHistory={defaultSearchQuery}
        formConfig={formConfig}
      />
    </IceContainer>
  );
}
