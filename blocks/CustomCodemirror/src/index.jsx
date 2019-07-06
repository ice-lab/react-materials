import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Grid } from '@alifd/next';
import 'codemirror/lib/codemirror.css';

require('codemirror/mode/javascript/javascript');

const { Row, Col } = Grid;

const codeString = `
  const fn1 = () => {
    console.log('I ♥ ICE')
  }`;

export default function CustomCodemirror() {
  const [value, setValue] = useState(codeString);

  const onChange = (editor, data, value) => {
    console.log({ data, value });
    setValue(value);
  };

  const renderCodeMirror = () => {
    const options = {
      mode: 'javascript',
      lineNumbers: true,
      tabSize: '2',
    };

    return (
      <CodeMirror
        value={value}
        options={options}
        onChange={onChange}
      />
    );
  };

  return (
    <IceContainer>
      <Row wrap>
        <Col l="12" xxs="24">
          {renderCodeMirror()}
        </Col>
        <Col l="12" xxs="24">
          {renderCodeMirror()}
        </Col>
      </Row>
    </IceContainer>
  );
}
