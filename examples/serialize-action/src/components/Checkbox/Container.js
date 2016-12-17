import React from 'react'
import { connect } from 'react-redux'
import { Change } from './actions'
import Checkbox from './Component'

const mapDispatchToProps = {
  onChange: checked => new Change(checked)
}

const CheckboxContainer = ({ stateKey }) => {
  const mapStateToProps = state => {
    return {
      checked: state[stateKey]
    }
  }

  const Container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Checkbox)

  return <Container />
}

export default CheckboxContainer
