import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from '@alifd/next';
import CustomForm from '../CustomForm';
import styles from './index.module.scss';

export default function SearchFilter(props) {
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);

  /**
   * 提交回调函数
   */
  function handleSubmit(errors, value) {
    if (errors) {
      console.log({ errors });
      return;
    }

    props.onSubmit(value);
  }

  /**
   * 高级搜索
   */
  function handleAdvancedSearch() {
    setShowAdvancedFields(!showAdvancedFields);
  }

  /**
   * 渲染按钮
   */
  function renderExtraContent() {
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
  }

  const { formConfig, value, onChange, onReset, hasAdvance } = props;

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

SearchFilter.displayName = 'SearchFilter';

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
