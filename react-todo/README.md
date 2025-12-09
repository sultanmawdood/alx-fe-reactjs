# React Todo List Application

A fully functional Todo List application built with React, featuring comprehensive testing with Jest and React Testing Library.

## Features

- ✅ Add new todo items
- ✅ Toggle todo completion status
- ✅ Delete todo items
- ✅ Initial demo todos
- ✅ Comprehensive test coverage

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

## Running Tests

```bash
npm test
```

## Project Structure

```
react-todo/
├── src/
│   ├── __tests__/
│   │   └── TodoList.test.js
│   ├── TodoList.js
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
├── public/
└── package.json
```

## Component Details

### TodoList Component

The main component that manages the todo list state and provides functionality for:
- Adding new todos via form submission
- Toggling completion status by clicking on todo items
- Deleting todos with individual delete buttons

### Test Coverage

All tests are located in `src/__tests__/TodoList.test.js` and cover:
1. Initial render verification
2. Adding new todos
3. Preventing empty todos
4. Toggling completion status
5. Deleting todos

## Technologies Used

- React 19
- Jest
- React Testing Library
- @testing-library/jest-dom
