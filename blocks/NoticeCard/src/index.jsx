import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '@alifd/next';

export default function NoticeCard(props) {
  const { title, content } = props;

  const onClose = () => {
    console.log('onClose triggered!');
  };

  const afterClose = () => {
    console.log('afterClose triggered!');
  };

  return (
    <Message
      title={title}
      closeable
      type="notice"
      onClose={onClose}
      afterClose={afterClose}>
      {content}
    </Message>
  );
}

NoticeCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

NoticeCard.defaultProps = {
  title: '温馨提示',
  content: '现在不是一个买房的低点，建议慎重考虑。',
};
