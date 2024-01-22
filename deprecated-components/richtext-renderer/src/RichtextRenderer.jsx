import React, { Component } from 'react';
import DOMPurify from "dompurify";

export default class RichtextRenderer extends Component {

  render() {
    const {html, className, ...others} = this.props;

    return (
      <div
        {...others}
        className={(className ? className + ' ' : '') + 'ice-richtext'}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html) }}
      />
    );
  }
}

