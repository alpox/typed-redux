import React, { Component, PropTypes } from 'react'

class Form extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    remember: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeRember: PropTypes.func.isRequired
  }

  onChangeName = e => this.props.onChangeName(e.target.value);
  onChangeRember = e => this.props.onChangeRember(e.target.checked);

  render() {
    const { name, remember } = this.props
    return (
      <p>
        <label>
          Name
          <input value={name} onChange={this.onChangeName} />
        </label>
        <label>
          <input type="checkbox" checked={remember} onChange={this.onChangeRember} />
          Remember
        </label>
      </p>
    )
  }
}

export default Form
