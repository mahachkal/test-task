import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      reqBody: new FormData(),
    };
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit() {
  if (!this.state.reqBody.get('username') ||
    !this.state.reqBody.get('password')) {
      alert('Заполните все поля');
      return;
  }
  fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=VladimirOleynik', {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      referrer: '',
      body: this.state.reqBody,
    }).then(res => res.json())
    .then(result => {
      if (result && result.status === 'ok') {
        this.props.addToken(result.message.token);
        const currentState = window.localStorage.getItem('appState');
        currentState.token = result.message.token;
        window.localStorage.setItem('appState', currentState);
        window.location.href = '/test-task'
      } else {
        alert(JSON.stringify(result.message));
      }
    })
    .catch(error => alert('Ошибка попробуйте еще раз'));
  
 }

onChangeUsername(e) {
  const { reqBody } = this.state;
  reqBody.set('username', e.target.value);
  this.setState({ reqBody: reqBody });  
}

onChangePassword(e) {
  const { reqBody } = this.state;
  reqBody.set('password', e.target.value);
  this.setState({ reqBody: reqBody });
}
  
  render() {
    return (
      <div>
        <h3>Авторизация</h3>
        <form onSubmit={this.handleSubmit} name="login">
          <label>Логин:</label>
          <input onChange={this.onChangeUsername} />
          <label>Пароль:</label>
          <input onChange={this.onChangePassword} />
          <input type="submit" value="Отправить" />
        </form>
        <Link to="/test-task">К списку задач</Link>
      </div>
    )
  }
}

export default Login;
