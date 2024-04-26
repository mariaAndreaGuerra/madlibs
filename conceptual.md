### Conceptual Exercise

Answer the following questions below:

- What is React? React is the most popular front-end framework for JavaScript development.
 When and why would you use it? Makes it easy to use reusable “view components”. These “encapsulate” logic and HTML into a class. Often makes it easier to build modular applications

- What is Babel? is a JavaScript compiler

- What is JSX? is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript files. This makes it easier to create React components by combining UI markup with JavaScript logic.

- How is a Component created in React? you can create components as arrow functions:

const MyComponent = ({value}) => (
    <div>
      <h1>Hello, {value}!</h1>
    </div>
);

- What are some difference between state and props? while props are immutable inputs passed from parent to child components. State is scoped to the component where it's defined, while props are scoped to the component hierarchy. State is initialized within a component, while props are passed as attributes to JSX elements. 

- What does "downward data flow" refer to in React? 

- What is a controlled component? controlled components provide better control and predictability over form input values, which is often crucial in complex UIs and form handling scenarios.

- What is an uncontrolled component? refers to the pattern in which data is passed from parent components to child components through props. In this pattern, data flows in a unidirectional manner, starting from higher-level components (parent components) and cascading down to lower-level components (child components).

- What is the purpose of the `key` prop when rendering a list of components? is essential for optimizing the rendering and updating process of lists in React by providing a unique identifier for each component. It enables efficient reconciliation, state management, and DOM manipulation when rendering dynamic lists of components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? Array index is a poor choice for several reasons: lack of stability, limited uniqueness, performance concerns, accessibility and testing. By using meaningful and stable keys, you can ensure predictable rendering behavior, optimize performance, and improve the accessibility and testability of your React components.

- Describe useEffect.  What use cases is it used for in React components? useEffect lets you tell React to do something after rendering the component. It accepts a function as its first argument, which will be executed after every render, and an optional second argument that specifies when the effect should run again.

- What does useRef do?  Does a change to a ref value cause a rerender of a component? useRef is commonly used to access or store references to DOM elements, manage focus, store mutable values, or preserve values between renders without causing re-renders. 

- When would you use a ref? When wouldn't you use one? You would use a ref in React when you need to access or manage a DOM element imperatively, store mutable values that persist across renders, or interact with third-party libraries that require direct access to DOM elements

- What is a custom hook in React? Custom hooks allow you to extract and share stateful logic between components without relying on higher-order components, render props, or other patterns. 
When would you want to write one? You would want to write a custom hook in React when you find yourself repeating the same logic or patterns in multiple components. This could include fetching data from an API, managing local or global state, handling subscriptions, implementing timers or animations, or any other reusable behavior that can be abstracted into a standalone function.
