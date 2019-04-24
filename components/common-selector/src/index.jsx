import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from '@alifd/next';

export default class Container extends Component {
  static propTypes = {
    /**
     * value 数组, 回填值
     */
    value: PropTypes.array,
    /**
     * onChange 当用户有修改时会触发, 回调参数是 value
     */
    onChange: PropTypes.func,
    /**
     * 组件尺寸
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * focus 的时候是否显示下拉列表
     */
    isFocusShow: PropTypes.bool,
    /**
     * 自定义组件宽度
     */
    width: PropTypes.number,
    /**
     * 自定义 placeholder
     */
    placeholder: PropTypes.string,
    /**
     * 获取数据
     */
    fetchData: PropTypes.func.isRequired,
    /**
     * 禁止修改数据
     */
    disabled: PropTypes.bool,
    valueKey: PropTypes.string,
    renderOption: PropTypes.func,
    getFillValue: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    value: [],
    onChange: () => {},
    size: 'medium',
    isFocusShow: false,
    className: '',
    width: 250,
    disabled: false,
    placeholder: '输入关键字搜索',
    valueKey: 'value',
    getFillValue: (item) => {
      const { valueKey } = this.props;
      return item[valueKey];
    },
    renderOption: (item) => {
      const { valueKey } = this.props;
      return <Select.Option value={item[valueKey]}>{item[valueKey]}</Select.Option>;
    },
  };

  state = {
    loading: false,
    dataSource: null,
    // 下拉列表是否可见
    visible: false,
  };

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  // 异步获取数据
  fetchData = (query) => {
    const { fetchData } = this.props;

    if (query.inputValue === '' && this.defaultData) {
      this.setState({
        visible: true,
        dataSource: this.defaultData,
        loading: false,
      });
    }

    this.setState({
      visible: true,
      loading: true,
      errorMessage: null,
    });

    fetchData(query).catch((err) => {
      this.setState({
        errorMessage: err.message,
        loading: false,
        visible: true,
      });
    }).then((dataSource) => {
      if (query.inputValue === '') {
        this.defaultData = dataSource;
      }

      this.setState({
        visible: true,
        dataSource,
        loading: false,
      });
    });
  };

  // input focus
  onInputFocus = (e, clickByUser) => {
    const { isFocusShow } = this.props;
    if (isFocusShow && clickByUser) {
      // 默认 keywords 为空字符串
      this.fetchData({
        inputValue: '',
      });
    }
  };

  // 输入
  onInputChange = (key) => {
    if (this.timer) clearTimeout(this.timer);
    const timeout = 300;

    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.fetchData({
        inputValue: key,
      });
    }, timeout);
  };

  // 组件整体 onChange
  onChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  };

  // 同步 visible: 组件的设计比较奇葩
  onVisibleChange = (visible) => {
    const { visible: stateVisible } = this.state;

    if (stateVisible !== visible) {
      this.setState({
        visible,
      });
    }
  };

  getDataSource = () => {
    const { loading, dataSource, visible } = this.state;

    if (loading) {
      return [
        {
          label: <span>查询中...</span>,
          value: '-1',
          disabled: true,
        },
      ];
    }

    if (!dataSource || !visible) {
      return [];
    }

    if (dataSource.length === 0) {
      return [
        {
          label: <span>没有找到匹配项</span>,
          value: '-2',
          disabled: true,
        },
      ];
    }

    const { valueKey, renderOption, getFillValue } = this.props;
    return dataSource.map((item) => {
      return {
        label: renderOption(item),
        fillValue: getFillValue(item),
        value: item[valueKey],
      };
    });
  };

  render() {
    const { visible, errorMessage } = this.state;
    const {
      valueKey, renderOption, getFillValue, isFocusShow,
      className, style, width, fetchData, onChange, ...others
    } = this.props;
    const dataSource = this.getDataSource();

    return (
      <div className={`ice-common-selector ${className}`} style={style}>
        <Select
          style={{
            width,
            display: 'inline-block',
            verticalAlign: 'middle',
          }}
          mode="tag"
          onChange={this.onChange}
          dataSource={dataSource}
          onSearch={this.onInputChange}
          onFocus={this.onInputFocus}
          onVisibleChange={this.onVisibleChange}
          visible={visible}
          filterLocal={false}
          fillProps="fillValue"
          hasArrow={false}
          hiddenSelected
          {...others}
        />
        {errorMessage ? (
          <span
            className="error-msg"
            dangerouslySetInnerHTML={{ __html: errorMessage }}
          />
        ) : null}
      </div>
    );
  }
}
