import React from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Form, Select } from '@alifd/next';

import RichEditor from './RichEditor';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

export default function Index() {
  const handleSubmit = (values, errors) => {
    console.log('errors', errors, 'values', values);
    if (errors) {
      return false;
    }

    // ajax values
  };

  return (
    <div className="content-editor">
      <IceContainer title="文章发布">
        <Form labelAlign="top" className={styles.form} >
          <Row>
            <Col span="11">
              <FormItem label="标题" required requiredMessage="标题必填">
                <Input name="title" placeholder="这里填写文章标题" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="11">
              <FormItem label="作者" required requiredMessage="作者信息必填">
                <Input name="author" placeholder="填写作者名称" />
              </FormItem>
            </Col>
            <Col span="11" offset="2">
              <FormItem label="分类" required requiredMessage="分类必填支持多个" help="">
                <Select
                  name="cats"
                  className={styles.cats}
                  mode="multiple"
                  placeholder="请选择分类"
                  dataSource={[
                    { label: '分类1', value: 'cat1' },
                    { label: '分类2', value: 'cat2' },
                    { label: '分类3', value: 'cat3' },
                  ]}
                />
                <Form.Error name="cats">
                  {
                    (errors) => {
                      return  errors.length? <div>
                        <span className={styles.spanColor}>
                          {errors.map((item) => item).join(',')}
                        </span>
                        <span className={styles.spanMarginLeft}>
                          不知道选择什么分类？请 <a href="#">点击这里</a>{' '}
                          查看
                          </span>
                      </div>: null;
                    }
                  }
                </Form.Error>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="描述">
            <Input.TextArea name="desc" placeholder="这里填写正文描述" />
          </FormItem>
          <FormItem label="正文" required>
            <RichEditor name="body" />
          </FormItem>
          <FormItem label=" ">
            <Form.Submit validate type="primary" onClick={handleSubmit}>
              发布文章
              </Form.Submit>
          </FormItem>
        </Form>
      </IceContainer>
    </div>
  );
}
