import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};
export default TodoList;
