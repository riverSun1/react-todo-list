import { useState } from "react";
import "./InputForm.css";

const InputForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [done, setDone] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const addTodoHandler = () => {
    // 유효성 검사 추가
    if (title.length > 12) {
      setTitleError("📢 제목은 12글자 이내로 입력해주세요.");
      return;
    }

    if (body.length > 20) {
      setBodyError("📢 내용은 20글자 이내로 입력해주세요.");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      title: title,
      body: body,
      isDone: done,
    };
    setTodos([...todos, newTodo]); // 기존의 todo에 새로만든 todo 추가
    setTitle(""); // 할 일을 추가한 후 입력 필드를 지웁니다.
    setBody("");
    setTitleError(""); // 에러 메시지 초기화
    setBodyError("");
  };

  window.onload = () => {
    document.getElementById("input-title").focus();
  };

  return (
    <div id="input-container">
      <div id="title-container">
        <div id="input-description">제목</div>
        <div id="error">
          <input
            id="input-title"
            placeholder="제목을 입력하세요."
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError(""); // 입력이 변경될 때 에러 메시지 초기화
            }}
          />
          {/* 에러 메시지 표시 */}
          {titleError && <div id="error-message">{titleError}</div>}
        </div>
      </div>
      <div id="title-container">
        <div id="input-description">내용</div>
        <div id="error">
          <input
            id="input-content"
            placeholder="내용을 입력하세요."
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setBodyError(""); // 입력이 변경될 때 에러 메시지 초기화
            }}
          />
          {/* 에러 메시지 표시 */}
          {bodyError && <div id="error-message">{bodyError}</div>}
        </div>
      </div>
      {/* button을 눌렀을 때 state에 객체가 추가된다. */}
      <button
        id="submit-button"
        onClick={addTodoHandler}
        onSubmit={() => {
          setDone(false);
        }}
      >
        추가
      </button>
    </div>
  );
};

export default InputForm;
