/* eslint no-unused-expressions: 0 */
import React, { Component } from 'react';
import { Icon, Input } from '@alifd/next';

export default class CellEditor extends Component {
  static displayName = 'CellEditor';

  constructor(props) {
    super(props);

    this.tempValue = '';
    this.state = {
      editMode: false,
      value: props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  editThisCell = () => {
    // 缓存数据以便回滚
    this.tempValue = this.state.value;
    this.setState({
      editMode: true,
    });
  };

  onValueChange = (value) => {
    this.setState({
      value,
    });
  };

  updateValue = () => {
    this.setState({
      editMode: false,
    });
    const { index, valueKey } = this.props;
    const { value } = this.state;
    this.props.onChange && this.props.onChange(index, valueKey, value);
  };

  rollBackThisCell = () => {
    this.setState({
      value: this.tempValue,
      editMode: false,
    });
    this.tempValue = '';
  };

  render() {
    const { value, editMode } = this.state;

    if (editMode) {
      return (
        <div className="celleditor">
          <Input
            className='cellInput'
            value={value}
            onChange={this.onValueChange}
          />
          <span
            className='operationIcon'
            title="确定"
            onClick={this.updateValue}
          >
            <Icon size="xs" type="select" />
          </span>
          <span
            className='operationIcon'
            title="撤销"
            onClick={this.rollBackThisCell}
          >
            <Icon size="xs" type="refresh" />
          </span>
        </div>
      );
    }
    return (
      <div className="celleditor">
        <span>{value}</span>
        <span
          className='operationIcon'
          className="celleditor-trigger"
          title="编辑"
          onClick={this.editThisCell}
        >
          <Icon size="xs" type="edit" />
        </span>
      </div>
    );
  }
}
