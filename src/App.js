import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './actions';
import Tasks from './tasks'
import Create from './create'
import Login from './login'
import Edit from './edit'
import './App.css'

class App extends React.Component {
  
  handleOut() {
    this.props.deleteToken();
    const currentState = window.localStorage.getItem('appState');
    delete currentState.token;
    window.localStorage.setItem('appState', currentState);
  }
  
  render() {
    const token = this.props.store.getState().token;
    return (
        <React.Fragment>
          {token ?
            <form onSubmit={() => this.handleOut()} name="out">
              <input type="submit" value="Выйти"/>
            </form> :
            <Link to="/login">Войти</Link>
          }
          <Switch>
            <Route exact path="/test-task" render={(props) => ( <Tasks {...this.props}/>)} />
            <Route exact path="/create" render={(props) => <Create {...this.props} />} />
            <Route exact path="/edit/:id" render={(props) => <Edit {...this.props} />} />
            <Route exact path="/login" render={(props) => <Login {...this.props} />} />
          </Switch>
        </React.Fragment>
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
