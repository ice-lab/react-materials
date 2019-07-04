import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from '@alifd/next';
import CustomForm from '../CustomForm';
import styles from './index.module.scss';

export default function SearchFilter(props) {
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const { formConfig, value, onChange, onReset, hasAdvance } = props;

  /**
   * 提交回调函数
   */
  const handleSubmit = (errors, formValue) => {
    if (errors) {
      console.log({ errors });
      return;
    }

    props.onSubmit(formValue);
  };

  /**
   * 高级搜索
   */
  const handleAdvancedSearch = () => {
    setShowAdvancedFields(!showAdvancedFields);
  };

  /**
   * 渲染按钮
   */
  const renderExtraContent = () => {
    return (
      <Button
        text
        className={styles.extraContent}
        onClick={handleAdvancedSearch}
      >
        高级搜索
        {' '}
        <Icon
          size="xs"
          type={showAdvancedFields ? 'arrow-up' : 'arrow-down'}
        />
      </Button>
    );
  };

  const config = showAdvancedFields
    ? formConfig
    : formConfig.filter(item => !item.advanced);

  return (
    <CustomForm
      config={config}
      value={value}
      formChange={onChange}
      handleSubmit={handleSubmit}
      handleReset={onReset}
      extraContent={renderExtraContent()}
      hasAdvance={hasAdvance || false}
    />
  );
}

SearchFilter.propTypes = {
  formConfig: PropTypes.array.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

SearchFilter.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  onReset: () => {},
};
