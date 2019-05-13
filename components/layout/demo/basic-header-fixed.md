---
title: Index 吸顶
order: 4
iframe: true
width: 960
importStyle: true
---

Index 固定（吸顶），其他区域滚动。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '@icedesign/layout';

class App extends Component {
  render() {
    return (
      <Layout fixable={true}>
        <Layout.Index style={{
          height: 80,
        }} type="primary">Index</Layout.Index>
        <Layout.Section scrollable={true}>
          <Layout.Aside style={{
            width: 200,
          }} type="primary">
            <br />
            Aside
          </Layout.Aside>
          <Layout.Main>
            <p>Main</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动 end</p>
            <Layout.Index>Index</Layout.Index>
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
