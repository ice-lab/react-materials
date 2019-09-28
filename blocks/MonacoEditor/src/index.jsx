import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import Monaco from 'react-monaco-editor';
import 'regenerator-runtime/runtime';
import styles from './index.module.scss';

function getScript(uri) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.type = 'text/javascript';
    const head = document.head || document.head.getElementsByTagName('head')[0];
    el.onerror = function onerror(e) {
      reject(new URIError(`${uri} could not be loaded`), e);
    };
    el.onload = function onload(e) {
      resolve({ uri, event: e });
    };
    head.appendChild(el);
    el.src = uri;
  });
}

export default function MonacoEditor() {
  const [monacoReady, setMonacoReady] = useState(false);

  useEffect(() => {
    (async () => {
      const vsBasePath = 'https://cdn.bootcss.com/monaco-editor/0.10.1/min/vs';
    
      if (!window.require) {
        await getScript(`${vsBasePath}/loader.js`);
      }
      const monacoRequire = window.require;
      monacoRequire.config({ paths: { vs: vsBasePath } });
      // monaco editor 的跨域解决方案：https://github.com/Microsoft/monaco-editor#integrate-cross-domain
      window.MonacoEnvironment = {
        getWorkerUrl() {
          return '/monaco-editor-worker-loader-proxy.js';
        },
      };
      monacoRequire(['vs/editor/editor.main'], () => {
        setMonacoReady(true);
      });
    })();
  }, []);

  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  };

  const editorDidMount = (editor) => {
    console.log('editorDidMount', editor);
    editor.focus();
  };

  const code = `console.log('hello world');

function foo() {
// hello world
}
`;
  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };

  return (
    <div
      className={styles.monacoEditorContainer}
    >
      <IceContainer className={styles.container}>
        {monacoReady ? (
          <Monaco
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
          />
        ) : (
          'loading...'
        )}
      </IceContainer>
    </div>
  );
}
