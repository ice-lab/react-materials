import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css'
import styles from './index.module.scss';

export default function CustomBraftEditor() {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));

  const submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML()
    console.log(htmlContent);
    // ajax post to database
    // const result = await saveEditorContentAPI(htmlContent)
  }

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  }

  return (
    <div>
      <h3 className={styles.title}>
        <a className={styles.link} href="https://github.com/margox/braft-editor" rel="noopener noreferrer" target="_blank">Braft Editor</a>
        <span>：一个基于draft-js的Web富文本编辑器，适用于React框架，兼容主流现代浏览器。</span>
      </h3>
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
        className={styles.editor}
      />
    </div>
  );
}
