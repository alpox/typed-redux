import React from 'react'
import { connect } from 'react-redux'
import { Change } from './actions'
import Input from './Component'

const mapDispatchToProps = {
  onChange: value => new Change(value)
}

const InputContainer = ({ stateKey }) => {
  const mapStateToProps = state => {
    return {
      value: state[stateKey]
    }
  }

  const Container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Input)

  return <Container />
}

export default InputContainer
