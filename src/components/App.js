import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'

class App extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())

    // store.subscribe(() => this.forceUpdate())
  }

  render() {
    // const { store } = this.props
    // const { todos, goals, loading } = store.getState()
    // const { loading} = store.getState()
    if(this.props.loading === true){
      return <h1>loading...</h1>
    }
    
    return (
      <div>
        {/*<Todos todos={todos} store={this.props.store} />*/}
        { /*<Goals goals={goals} store={this.props.store} />*/}
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
