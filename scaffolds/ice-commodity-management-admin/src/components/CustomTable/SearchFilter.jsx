/* eslint react/no-string-refs:0,react/forbid-prop-types:0 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from '@alifd/next';
import CustomForm from '../CustomForm';

export default function SearchFilter(props) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  /**
   * 提交回调函数
   */
  const handleSubmit = (errors, value) => {
    if (errors) {
      console.log({ errors });
      return;
    }

    props.onSubmit(value);
  };

  /**
   * 渲染按钮
   */
  const renderExtraContent = () => {
    return (
      <Button
        text
        style={styles.extraContent}
        onClick={() => setShowAdvanced(!showAdvanced)}
      >
        高级搜索{' '}
        <Icon
          size="xs"
          type={showAdvanced ? 'arrow-up' : 'arrow-down'}
        />
      </Button>
    );
  };

  const { formConfig, value, onChange, onReset, hasAdvance } = props;

  const config = showAdvanced
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

const styles = {
  extraContent: {
    position: 'absolute',
    right: '0',
    bottom: '0',
  },
};

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
