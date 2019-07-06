import React from 'react';
import IceContainer from '@icedesign/container';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './index.module.scss';

export default function WysiwygEditor() {
  return (
    <IceContainer>
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        className={styles.editorContent}
      />
    </IceContainer>
  );
}
