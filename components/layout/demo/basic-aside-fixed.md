---
title: Aside 固定
order: 8
iframe: true
width: 960
importStyle: true
---

Aside 固定，其他区域滚动

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '@icedesign/layout';

class App extends Component {
  render() {
    return (
      <Layout fixable={true}>
        <Layout.Aside style={{
          width: 200,
        }} type="primary">
          <br />
          Aside
        </Layout.Aside>
        <Layout.Section scrollable={true}>
          <Layout.Index type="primary" style={{
            height: 80
          }}>&nbsp;&nbsp;&nbsp;&nbsp;Index</Layout.Index>
          <Layout.Main>
            <p>Main</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
          </Layout.Main>
          <Layout.Index style={{
            height: 200
          }}>Index</Layout.Index>
        </Layout.Section>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
