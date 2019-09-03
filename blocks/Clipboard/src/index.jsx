import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Grid, Button, Input, Message } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  const [value, setValue] = useState('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleCopy = (text) => {
    if (!text) {
      return Message.success('没有需要复制的内容');
    }
    Message.success('复制成功');
  };

  return (
    <Row wrap className={styles.row}>
      <Col l="10">
        <Input.TextArea
          className={styles.inputWidth}
          rows={8}
          value={value}
          onChange={handleChange}
        />
      </Col>

      <Col l="4" className={styles.clipBtn}>
        <CopyToClipboard text={value} onCopy={handleCopy}>
          <Button type="primary">复制到剪贴板</Button>
        </CopyToClipboard>
      </Col>

      <Col l="10">
        <Input.TextArea
          className={styles.inputWidth}
          rows={8}
          placeholder="通过右键粘贴功能到这里试试..."
        />
      </Col>
    </Row>
  );
}
