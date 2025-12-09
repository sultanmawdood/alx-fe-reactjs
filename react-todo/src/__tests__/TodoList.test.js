import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByTestId("todo-input");
  const button = screen.getByTestId("add-btn");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completed state", () => {
  render(<TodoList />);

  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);

  const todoItem = screen.getByText("Learn React");
  const deleteBtn = todoItem.querySelector("button");

  fireEvent.click(deleteBtn);

  expect(todoItem).not.toBeInTheDocument();
});
