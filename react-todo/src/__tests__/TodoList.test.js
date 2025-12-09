import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    const initialTodos = screen.getAllByRole('listitem');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodos.length);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    expect(todoItem).toHaveStyle('text-decoration: none');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoText = 'Learn React';
    expect(screen.getByText(todoText)).toBeInTheDocument();

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
