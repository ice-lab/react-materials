import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Select,
  DatePicker,
  Radio,
  Message,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;

export default function DonationForm() {
  const [value, setValue] = useState({
    status: 'pending',
  });

  const formChange = newValue => setValue(newValue);

  let formRef;
  const validateAllFormField = () => {
    formRef.validateAll((errors, values) => {
      if (errors) {
        console.log({ errors });
      } else {
        console.log({ values });
        Message.success('提交成功');
      }
    });
  };

  return (
    <IceContainer>
      <div className={styles.title}>图书捐赠</div>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={form => formRef = form}
      >
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>图书名称</div>
            <IceFormBinder
              required
              triggerType="onBlur"
              message="图书名称不能为空"
              name="bookName"
            >
              <Input
                placeholder="请输入图书名称"
                className={styles.selectWidth}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="bookName" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>ISBN</div>
            <IceFormBinder
              required
              triggerType="onBlur"
              message="ISBN不能为空"
              name="isbn"
            >
              <Input
                placeholder="图书背面右下角条纹码处"
                className={styles.selectWidth}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="isbn" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>书目类别</div>
            <IceFormBinder name="cate">
              <Select
                placeholder="请选择"
                mode="multiple"
                className={styles.selectWidth}
              >
                <Option value="technology">技术领域</Option>
                <Option value="professional">专业领域</Option>
                <Option value="management">管理沟通</Option>
                <Option value="other">其他</Option>
              </Select>
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>捐赠人</div>
            <IceFormBinder
              required
              triggerType="onBlur"
              message="捐赠人不能为空"
              name="donator"
            >
              <Input
                placeholder="请输入"
                className={styles.selectWidth}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="donator" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>捐赠时间</div>
            <IceFormBinder name="time">
              <DatePicker
                className={styles.selectWidth}
              />
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>状态</div>
            <IceFormBinder name="status">
              <RadioGroup

                dataSource={[
                  {
                    value: 'pending',
                    label: '待入库',
                  },
                  {
                    value: 'instock',
                    label: '在库',
                  },
                  {
                    value: 'checkout',
                    label: '外借',
                  },
                  {
                    value: 'lost',
                    label: '遗失',
                  },
                ]}
              />
            </IceFormBinder>
          </div>
          <p className={styles.tips}>
            提醒：若选择“在库”状态的话，请确认已经将图书放置到1-5-10-N的书架上
          </p>
          <Button
            type="primary"
            className={styles.submitButton}
            onClick={validateAllFormField}
          >
            提 交
          </Button>
        </div>
      </IceFormBinderWrapper>
    </IceContainer>
  );
}
