/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this._list = [];
  }

  add(todo) {
    this._list.push(todo);
  }

  remove(indexOfTodo) {
    this._list.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this._list.length) {
      this._list[index] = updatedTodo;
    }
  }

  getAll() {
    return this._list;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this._list.length) {
      return null;
    } else {
      return this._list[indexOfTodo];
    }
  }

  clear() {
    this._list.length = 0;
  }
}

module.exports = Todo;
