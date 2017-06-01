import React from 'react';
import Stats from './stats.jsx';

export default function Header(props) {

  return (
    <header>
      <Stats todos={props.todos} />
      <h1>{props.title}</h1>
    </header>
  )

}
Header.propTypes = {
  todos: React.PropTypes.array.isRequired
};