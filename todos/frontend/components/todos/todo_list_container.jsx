import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchtoProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) =>  dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos())
});


export default connect(mapStateToProps, mapDispatchtoProps)(TodoList);
