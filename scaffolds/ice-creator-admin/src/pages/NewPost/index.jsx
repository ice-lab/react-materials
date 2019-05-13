import React, { Component } from 'react';
import NewPostForm from './components/NewPostForm/index';

export default class NewPost extends Component {
  static displayName = 'NewPost';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <NewPostForm />;
  }
}
