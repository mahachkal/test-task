import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      sort_field: 'id',
      sort_direction: 'asc',
      task: this.props.task,
      tasks: this.props.tasks,
    };
  }
  
  componentDidMount() {
    this.fetchTasks();
    
  }
  
  fetchTasks(actPage, sortField, sortDirection ) {
    const { page, sort_field, sort_direction } = this.state;
    const sort_fieldUrl = `&sort_field=${sortField || sort_field}`;
    const sort_directionUrl = `&sort_direction=${sortDirection || sort_direction}`;
    const pageUrl = `&page=${actPage || page}`;
    const url = `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=VladimirOleynik${sort_fieldUrl}${sort_directionUrl}${pageUrl}`;
    fetch(url, {
      method: 'GET',
      mode: 'cors', 
      cache: 'no-cache', 
      referrer: '',
    }).then(res => res.json())
      .then(result => {
          this.props.addTasks(result.message.tasks);
          this.setState({
            total_task_count: result.message.total_task_count,
            tasks: result.message.tasks
          });
        },
        (error) => {
          alert(error);
        }
      );
  }
  
  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber.selected + 1 });
    this.fetchTasks(pageNumber.selected + 1);
  
  }
   
  onChangeSort_field(e) {
    this.setState({ sort_field: e.target.value });
    this.fetchTasks('', e.target.value);
  }
  
  onChangeSort_direction(e) {
    this.setState({ sort_direction: e.target.value });  
    this.fetchTasks('', '', e.target.value);
  }


  
  render() {
    const { tasks, total_task_count, page } = this.state;
    const token = this.props.store.getState().token;
    return (
    <div>
      <div className="data-item">
        <h3>Список Задач</h3>
        <Link to="/create">Добавить задачу</Link>
        <form name="sort">
          <select onChange={(e) => this.onChangeSort_field(e)} name="sort_field">
            <option value="id">id</option> 
            <option value="username">username</option>
            <option value="email">email</option>
            <option value="status">status</option>
          </select>
          <select onChange={(e) => this.onChangeSort_direction(e)} name="sort_direction">
            <option value="asc">по возрастанияю</option> 
            <option value="desc">по убыванию</option>
          </select>
        </form>
        <div style={{ width: '50%' }}> 
          {tasks &&
            tasks.map(task => {
              return (
                <div key={task.id} className="tasks-item">
                  <div>{task.username}</div>
                  <div>{task.email}</div>
                  <div className="text-item">{task.text}</div>
                  {
                    task.status === 10 ? 
                      <div>Done</div> :
                      <div>To do</div>
                  }
                  {
                    token &&
                    <Link to={`/edit/${task.id}`}>Отредактировать задачу</Link>
                  }
                  {this.props.id == task.id &&
                  <div>Отредактировано Администратором</div>
                  
                  }
                </div>
              )
            })
          }
        </div>
      </div>
        <ReactPaginate
          pageCount={Math.ceil(total_task_count / 3)}	
          pageRangeDisplayed={2}	
          marginPagesDisplayed={1}
          initialPage={page - 1}
          onPageChange={(e) => this.handlePageChange(e)}
          activeClassName="active-page"
          containerClassName="Paginaton"
          disabledClassName="prev-next"
        />
      </div>
    )
  }
}
    
export default Tasks; 
