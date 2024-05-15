import "./Todo.css";

const Todo = ({ todo, deleteTodohandler, doneTodohandler }) => {
  const { id, title, body } = todo;

  return (
    <div id="todo-container">
      <strong>
        {todo.isDone ? "🔸" : "🔹"} {title}
      </strong>
      <div>{body}</div>
      <div id="todo-button-container">
        <button id="delete-button" onClick={() => deleteTodohandler(id)}>
          삭제
        </button>
        <button id="done-button" onClick={() => doneTodohandler(id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
