import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

type ToDoType = {
  id: number;
  todo: string;
};

const ToDoList = (): JSX.Element => {
  const [todoList, setTodoList] = useState<ToDoType[]>([]);
  const [todoText, setTodoText] = useState<string>("");

  const updateTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const registerTodo = async () => {
    await axios.post("http://localhost:5000/todos", { todo: todoText });
    setTodoText("");
    await getToDoList();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete("http://localhost:5000/todos/${id}");
    await getToDoList();
  };

  const getToDoList = async () => {
    const { data } = await axios.get<ToDoType[]>("http://localhost:5000/todos");
    setTodoList(data);
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <section>
      <section>
        <input type="text" value={todoText} onChange={updateTodoText} />
        <button onClick={registerTodo}>등록</button>
      </section>
      <section>
        {todoList.map((todo) => {
          return (
            <section key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default ToDoList;
