import Radio from 'rc-radio'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class RKRadio extends Component {
  static defaultProps = {
    prefixCls: 'rk-radio'
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.string,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
  }
  render () {
    const { prefixCls, children, checked, disabled, className, style } = this.props
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
      [className]: !!className
    })
    return (
      <label className={classString} style={style}>
        <Radio {...this.props} style={null} children={null} />
        <span>{children}</span>
      </label>
    )
  }
}
