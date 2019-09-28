import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './index.module.scss';

export default function WysiwygEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    setEditorState(EditorState.createWithContent(contentState));
  }, []);

  const onEditorStateChange = (newEditorState) => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(newEditorState);
  }
  
  return (
    <div>
      <h3 className={styles.title}>
        <a className={styles.link} href="https://github.com/jpuri/react-draft-wysiwyg" rel="noopener noreferrer" target="_blank">React Draft Wysiwyg</a>
        <span>：A Wysiwyg Built on ReactJS and DraftJS</span>
      </h3>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
    </div>
  );
}
