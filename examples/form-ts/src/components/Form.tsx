import * as React from 'react';
import { Component, SyntheticEvent, EventHandler, FormEvent } from 'react';

export interface FormProps {
  name: string,
  remember: boolean,
  onChangeName: (name: string) => any,
  onChangeRember: (remember: boolean) => any
}

class Form extends Component<FormProps, undefined> {
  onChangeName = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.onChangeName(e.currentTarget.value);
  };

  onChangeRemember = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.onChangeRember(e.currentTarget.checked);
  };

  render() {
    const { name, remember } = this.props;

    return (
      <p>
        <label>
          Name
          <input value={name} onChange={this.onChangeName} />
        </label>
        <label>
          <input type="checkbox" checked={remember} onChange={this.onChangeRemember} />
          Remember
        </label>
      </p>
    )
  }
}

export default Form;
