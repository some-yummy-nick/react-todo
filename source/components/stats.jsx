import React from 'react';

export default function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos.filter(todo=>todo.completed).length;
  let notCompleted = total - completed;

  return (
    <table>
      <tbody>
      <tr>
        <th>Всего задач</th>
        <td>{total}</td>
      </tr>
      <tr>
        <th>Выполнено</th>
        <td>{completed}</td>
      </tr>
      <tr>
        <th>Осталось</th>
        <td>{notCompleted}</td>
      </tr>
      </tbody>
    </table>
  )

}

Stats.propTypes = {
  todos: React.PropTypes.array.isRequired
};
