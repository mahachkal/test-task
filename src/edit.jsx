import React from 'react';
import { Link } from 'react-router-dom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reqBody: new FormData(),
    };
    
    const task = this.props.tasks.find((elem) => {
      const id = window.location.pathname.substr(6);
      return elem.id == id;
    });
    this.state.task = task;
    
    this.state.reqBody.set('status', task.status);
    
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
componentDidUnmount() {
  this.props.deleteTask();
}
  
handleSubmit() {
const { reqBody } = this.state;
const currentState = window.localStorage.getItem('appState');
const token = currentState.token;
reqBody.set('token', token);
  fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${this.state.task.id}?developer=VladimirOleynik`, {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache', 
    referrer: '',
    body: reqBody,
  }).then(res => res.json())
  .then(result => {
      if (result && result.status === 'ok') {
        alert('Задача отредактирована');
        window.location.href = '/test-task'
      } else {
        alert(JSON.stringify(result.message));
        window.location.href = '/test-task';
        window.location.href = '/login';
      }
    })
    .catch(error => {
      alert('Ошибка попробуйте еще раз');
    });
   }
  
  onChangeStatus(e) {
    const { reqBody } = this.state;
    reqBody.set('status', e.target.value);
    this.setState({ reqBody: reqBody });
  }
  
  onChangeText(e) {
    const { reqBody, task } = this.state;
    reqBody.set('text', e.target.value);
    this.setState({ reqBody: reqBody });
    this.props.addId(task.id);
  }
  
  
  
  render() {
  const { task, reqBody } = this.state;
  const text = reqBody.get('text') || task.text;
    return (
      <div>
        <h3>Отредактировать Задачу</h3>
        <div>
          <div>{task.id}</div>
          <div>{task.username}</div>
          <div>{task.email}</div>
        </div>
        <form onSubmit={this.handleSubmit} >
          <label>Текст:</label>
          <input type="text" name="text" onChange={this.onChangeText} value={text}/>
          <label>Статус задачи:</label>
          {task.status === 0 ?
          <select onChange={this.onChangeStatus}>
            <option value="0">To do</option>
            <option value="10">Done</option>
          </select> :
          <select onChange={this.onChangeStatus}>
            <option value="0">To do</option>
            <option value="10" selected>Done</option>
          </select>
          }
          <input type="submit" value="Отредактировать" />
        </form>
        <Link to="/test-task">К списку задач</Link>
      </div>
    )
  }
}

export default Edit; 
        
