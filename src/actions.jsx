const addTasks = (tasks) => {
  return {
    type: 'ADD_TASKS',
    tasks,
  }
};

const addToken = (token) => {
  return {
    type: 'ADD_TOKEN',
    token,
  }
};

const deleteToken = (token) => {
  return {
    type: 'DELETE_TOKEN',
    token,
  }
};

const addId = (id) => {
  return {
    type: 'ADD_ID',
    id,
  }
};
 
export { addToken, deleteToken, addTasks, addId };
