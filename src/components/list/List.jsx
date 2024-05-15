import Todo from "../todo/Todo";
import "./List.css";

const List = ({ todos, setTodos }) => {
  const deleteTodohandler = (id) => {
    // 삭제할 대상 id
    const deletedTodos = todos.filter(function (todo) {
      return todo.id != id;
    });
    setTodos(deletedTodos);
  };

  const doneTodohandler = (id) => {
    // Working/Done할 대상 id
    const doneTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(doneTodos);
  };
  return (
    <div id="list-container">
      <div id="todo-working">
        <h2 id="list-title">Working 🔥</h2>
        <div id="todo-content">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodohandler={deleteTodohandler}
                  doneTodohandler={doneTodohandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div id="todo-done">
        <h2 id="list-title">Done 🎉</h2>
        <div id="todo-content">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodohandler={deleteTodohandler}
                  doneTodohandler={doneTodohandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
