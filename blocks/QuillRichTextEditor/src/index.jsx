import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import IceContainer from '@icedesign/container';
import 'react-quill/dist/quill.snow.css';
import styles from  './index.module.scss'

export default function QuillRichTextEditor() {
  const [value, setValue] = useState('React Quill Rich Text Editor...');
  const [theme] = useState('snow');

  const handleChange = (formValue) => {
    setValue(formValue);
  };

  return (
    <IceContainer>
      <ReactQuill
        value={value}
        theme={theme}
        modules={QuillRichTextEditor.modules}
        formats={QuillRichTextEditor.formats}
        onChange={handleChange}
      >
        <div className={styles.editorArea} />
      </ReactQuill>
    </IceContainer>
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
QuillRichTextEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
QuillRichTextEditor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];
