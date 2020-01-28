import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './actions';
import Tasks from './tasks'
import Create from './create'
import Login from './login'
import Edit from './edit'
import './App.css'

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" render={(props) => ( <Tasks {...this.props}/>)} />
          <Route exact path="/create" render={(props) => <Create {...this.props} />} />
          <Route exact path="/edit/:id" render={(props) => <Edit {...this.props} />} />
          <Route exact path="/login" render={(props) => <Login {...this.props} />} />
        </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    id: state.id,
  };
}

export default connect(mapStateToProps, actions)(App);
