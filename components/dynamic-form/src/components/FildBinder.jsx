import React from 'react'
import classnames from 'classnames'
export default class FildBinder extends React.Component {
  render() {
    let { item: C, value, status, ...props } = this.props
    return (
      <div className={classnames('icedesign_form_content')}>
        {
          status === "edit" ?
            <C {...props} value={value} />
            : <span>{value}</span>
        }
      </div>
    )
  }
}