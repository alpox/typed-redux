import React, { Component, PropTypes } from 'react'

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onChange = e => this.props.onChange(e.target.checked);

  render() {
    const { checked } = this.props

    return <input type="checkbox" checked={checked} onChange={this.onChange} />
  }
}

export default Checkbox
