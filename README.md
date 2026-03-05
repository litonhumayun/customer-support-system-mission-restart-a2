//What is JSX, and why is it used?

JSX is a way to write HTML code directly inside our JavaScript files so that we can build our website's structure and logic in one place. It makes our code much easier to read and organize.

//What is the difference between State and Props?
State is data managed inside a component that can change over time. Props are like function arguments that are passed into a component from its parent. The main difference is that a component can update its own State, but it cannot change the Props it receives.

//What is the useState hook, and how does it work?
The useState hook is a built-in react hook. It provides us with a variable to hold the current value and a special function to update that value. Whenever we use that update function, React automatically refreshes the screen to show the newest information to the user.

//How can you share state between components in React?
We can share state between components in React by Lifting State Up, Context API and State Management Libraries like React Router.

//How is event handling done in React?
In React, we handle events like clicks or typing just like we do in regular HTML, but with three small changes. Firstly we write events in camelCase, so onclick becomes onClick.Secondly we put our function inside curly braces { } instead of using quotes. Thirdly. to stop something like a page refresh, we use e.preventDefault().

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
