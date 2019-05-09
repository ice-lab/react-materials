import React from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
import './index.modules.scss'

export default class ColorPicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: props.defaultColor,
    };
  }

  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker,
    });
  };

  handleClose = () => {
    this.setState({
      displayColorPicker: false,
    });
  };

  handleChange = (color) => {
    this.setState(
      {
        color: color.hex,
      },
      () => {
        this.props.onChange(color);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="stylesswatch" onClick={this.handleClick}>
          <div style={{ background: `${this.state.color}` }}  className="stylescolor"/>
        </div>
        {this.state.displayColorPicker ? (
          <div className="stylespopover">
            <div className="stylescover" onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
