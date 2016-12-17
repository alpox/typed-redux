import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'typed-redux'
import Greet from './Component'

const GreetContainer = ({ stateKey }) => {
  const mapStateToProps = state => {
    return {
      name: state[stateKey]
    }
  }

  const Container = connect(mapStateToProps)(Greet)

  return <Container />
}

export default GreetContainer
