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
  // eslint-disable-next-line react/forbid-prop-types
  formConfig: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
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
