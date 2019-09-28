import React from 'react';
import IceContainer from '@icedesign/container';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

export default function CustomBraftEditor() {
  const handleRawChange = (content) => {
    console.log(content);
  };

  const handleChange = (rawContent) => {
    console.log(rawContent);
  };

  const editorProps = {
    height: 500,
    contentFormat: 'html',
    initialContent: '<p></p>',
    onChange: handleChange,
    onRawChange: handleRawChange,
  };

  return (
    <IceContainer>
      <BraftEditor {...editorProps} />
    </IceContainer>
  );
}
