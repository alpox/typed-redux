import React, { Component, PropTypes } from 'react'

class Input extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onChange = e => this.props.onChange(e.target.value);

  render() {
    const { value } = this.props

    return <input value={value} onChange={this.onChange} />
  }
}

export default Input
