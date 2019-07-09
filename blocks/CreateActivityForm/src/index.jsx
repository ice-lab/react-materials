import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Checkbox,
  Select,
  DatePicker,
  Switch,
  Radio,
  Form,
} from '@alifd/next';
import styles from './index.module.scss';


// FormBinder 用于获取表单组件的数据，通过标准受控 API value 和 onChange 来双向操作数据
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;


const formItemLayout = {
  labelCol: { xxs: "6", s: "2", l: "2" },
  wrapperCol: { s: "12", l: "10" },
};

export default function Index() {
  const [value, setValue] = useState({
    name: 'test',
    area: 'location1',
    time: [],
    delivery: false,
    type: ['地推活动'],
    resource: '线下场地免费',
    extra: '',
  });

  const onFormChange = (value) => {
    setValue(value);
  };

  const reset = () => {

  };

  const submit = (value, error) => {
    console.log('error', error, 'value', value);
    if (error) {
      // 处理表单报错
    }
    // 提交当前填写的数据
  };

  return (
    <div className="create-activity-form">
      <IceContainer title="活动发布" className={styles.container}>
        <Form
          value={value}
          onChange={onFormChange}
        >
            <FormItem {...formItemLayout} label="活动名称："
              required
              requiredMessage="活动名称必须填写"
            >
              <Input name="name" className={styles.inputWidth} />
            </FormItem>

            <FormItem {...formItemLayout} label="活动区域：">
              <Select
                name="area"
                dataSource={[
                  { label: '区域一', value: 'location1' },
                  { label: '区域二', value: 'location2' },
                ]}
              />
            </FormItem>

            <FormItem {...formItemLayout} label="活动时间：" >
              <RangePicker name="time" showTime />
            </FormItem>

            <FormItem {...formItemLayout} label="即时配送：">
              <Switch name="delivery" />
            </FormItem>

            <FormItem {...formItemLayout} label="活动性质：">
              <CheckboxGroup
                name="type"
                dataSource={[
                  { label: '美食线上活动', value: '美食线上活动' },
                  { label: '地推活动', value: '地推活动' },
                  { label: '线下主题活动', value: '线下主题活动' },
                  { label: '单纯品牌曝光', value: '单纯品牌曝光' },
                ]}
              />
            </FormItem>

            <FormItem {...formItemLayout} label="特殊资源：">
              <RadioGroup
                name="resource"
                dataSource={[
                  { label: '线上品牌商赞助', value: '线上品牌商赞助' },
                  { label: '线下场地免费', value: '线下场地免费' },
                ]}
              />
            </FormItem>

            <FormItem {...formItemLayout} label="活动形式：">
              <Input.TextArea name="extra" className={styles.inputWidth} />
            </FormItem>

            <FormItem {...formItemLayout} label=" ">
              <Form.Submit type="primary" validate onClick={submit}>
                立即创建
                </Form.Submit>
              <Form.Reset className={styles.resetBtn} onClick={reset}>
                重置
                </Form.Reset>
            </FormItem>
        </Form>
      </IceContainer>
    </div>
  );
}
