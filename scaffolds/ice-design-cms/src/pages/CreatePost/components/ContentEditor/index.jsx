import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Form, Button, Select, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import RichEditor from './RichEditor';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

export default function ContentEditor() {
  let formRef;

  const [value, setValue] = useState({
    title: '',
    desc: '',
    author: '',
    body: null,
    cats: [],
  });

  const formChange = formValue => setValue(formValue);

  const handleSubmit = () => {
    formRef.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
      if (errors) {
        return false;
      }

      Message.success('提交成功');
    });
  };

  return (
    <div className="content-editor">
      <IceFormBinderWrapper
        ref={(refInstance) => {
          formRef = refInstance;
        }}
        value={value}
        onChange={formChange}
      >
        <IceContainer>
          <h2 className={styles.title}>添加文章</h2>
          <Form labelAlign="top" className={styles.form}>
            <Row>
              <Col span="11">
                <FormItem label="标题" required>
                  <IceFormBinder name="title" required message="标题必填">
                    <Input placeholder="这里填写文章标题" />
                  </IceFormBinder>
                  <IceFormError name="title" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="11">
                <FormItem label="作者" required>
                  <IceFormBinder
                    name="author"
                    required
                    message="作者信息必填"
                  >
                    <Input placeholder="填写作者名称" />
                  </IceFormBinder>
                  <IceFormError name="author" />
                </FormItem>
              </Col>
              <Col span="11" offset="2">
                <FormItem label="分类" required>
                  <IceFormBinder
                    name="cats"
                    required
                    type="array"
                    message="分类必填支持多个"
                  >
                    <Select
                      style={{ width: '100%' }}
                      mode="multiple"
                      placeholder="请选择分类"
                      dataSource={[
                        { label: '分类1', value: 'cat1' },
                        { label: '分类2', value: 'cat2' },
                        { label: '分类3', value: 'cat3' },
                      ]}
                    />
                  </IceFormBinder>
                  <IceFormError
                    name="cats"
                    render={(errors) => {
                      console.log('errors', errors);
                      return (
                        <div>
                          <span style={{ color: 'red' }}>
                            {errors.map(item => item.message).join(',')}
                          </span>
                          <span className={styles.mr}>
                            不知道选择什么分类？请
                            {' '}
                            <a href="#">点击这里</a>
                            {' '}
                            查看
                          </span>
                        </div>
                      );
                    }}
                  />
                </FormItem>
              </Col>
            </Row>
            <FormItem label="描述">
              <IceFormBinder name="desc">
                <Input.TextArea placeholder="这里填写正文描述" />
              </IceFormBinder>
            </FormItem>
            <FormItem label="正文" required>
              <IceFormBinder name="body">
                <RichEditor />
              </IceFormBinder>
            </FormItem>
            <FormItem label=" ">
              <Button type="primary" onClick={handleSubmit}>
                发布文章
              </Button>
            </FormItem>
          </Form>
        </IceContainer>
      </IceFormBinderWrapper>
    </div>
  );
}
