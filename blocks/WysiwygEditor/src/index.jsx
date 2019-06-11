import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './index.module.scss';
export default class WysiwygEditor extends Component {
  static displayName = 'WysiwygEditor';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          className={styles.editorContent}
          onEditorStateChange={this.onEditorStateChange}
        />
      </IceContainer>
    );
  }
}


