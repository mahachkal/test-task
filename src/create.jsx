import React from 'react';
import { Link } from 'react-router-dom';


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      reqBody: new FormData(),
    };
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit() {
  if (!this.state.reqBody.get('username') ||
    !this.state.reqBody.get('email') ||
    !this.state.reqBody.get('text')) {
      alert('Заполните все поля');
      return;
  }
  fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=VladimirOleynik', {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      referrer: '',
      body: this.state.reqBody,
    })
    .then(res => res.json())
    .then(result => {
      if (result && result.status === 'ok') {
        alert('Задача cоздана');
        window.location.href = '/'
      } else {
        alert(JSON.stringify(result.message))
      }
    }).catch(error => {
    alert('Ошибка попробуйте еще раз' + error);
  });
 }

onChangeUsername(e) {
  const { reqBody } = this.state;
  reqBody.set('username', e.target.value);
  this.setState({ reqBody: reqBody });  
}

onChangeEmail(e) {
  const { reqBody } = this.state;
  reqBody.set('email', e.target.value);
  this.setState({ reqBody: reqBody });
}

onChangeText(e) {
  const { reqBody } = this.state;
  reqBody.set('text', e.target.value);
  this.setState({ reqBody: reqBody });
}
  
  render() {
    return (
      <div>
        <h3>Добавление задачи</h3>
        <form onSubmit={this.handleSubmit} name="create">
          <label>Логин:</label>
          <input onChange={this.onChangeUsername} />
          <label>Email:</label>
          <input onChange={this.onChangeEmail} />
          <label>Текст:</label>
          <input onChange={this.onChangeText} />
          <input type="submit" value="Отправить" />
        </form>
        <Link to="/">К списку задач</Link>
      </div>
    )
  }
}

export default Create;
