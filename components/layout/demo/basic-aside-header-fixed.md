---
title: Aside&Index 固定
order: 6
iframe: true
width: 960
importStyle: true
---

Aside Index 固定位置布局，将 Index 放在 Main 里一同滚动。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '@icedesign/layout';

class App extends Component {
  render() {
    return (
      <Layout fixable={true}>
        <Layout.Aside style={{
          width: 80,
        }} type="primary">
          <br />
          Aside
        </Layout.Aside>
        <Layout.Section>
          <Layout.Index style={{
            height: 80,
          }} type="primary">&nbsp;&nbsp;&nbsp;&nbsp;Index</Layout.Index>
          <Layout.Main scrollable={true}>
            <p>Main</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <Layout.Index style={{
              height: 80,
            }} type="primary">Index</Layout.Index>
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
