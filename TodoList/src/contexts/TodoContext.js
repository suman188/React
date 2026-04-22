import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // initial state and functions in array format
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  // properties for functions to manipulate the state
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
// custom hook to use the context
export const useTodo = () => {
  return useContext(TodoContext);
};
// provider component to wrap the app and provide the context value
export const TodoProvider = TodoContext.Provider;
