# React Basics - Personal Notes 📃

## Class Components

- Uses the JS syntactic sugar for OOP-like structuring the components, so you have the properties, methods and constructor

  - Class components always **extends** from base class Component imported from React
  
  - constructor() **is called first** passing the super() constructor from the base class(Component)

  - Then as as properties **you have the props passed when you use the component and state**, that is the object that stores the variables(properties) that your component will have

  - Lifecyle methods: something as **componentDidMount()**, **componentWillUnmount()** that gets called in different points in time of the component class as it's gets rendered

  - **componentDidMount():** for example gets called just after the first render() call
  
  - **setState():** is the method to update the state object property from the class, always does a shallow merge

  - **render():** is the method that render all the JSX in the screen, it gets called primarily when a state property is updated via the state change, props passed or from some lifecycle methods

## Functional Components

- Uses some functional concepts like pure and impure functions, as impure functions are used to cause an side effect on the state variables
  - All is function, JS always will execute the component class top to bottom
  
  - **class SomeComponent extends Component(){}** is replaced by **const SomeComponent = (props)  => {}**
  
  - State variables and Side Effects are updated/caused with hooks, like **useState** and **useEffect**
  
  - useState(): does an array destructuring vor setting a variable and a setter methor for updating that state variable, like **const [stateVariable, setStateVariable] = useState()**
  
  - useEffect(): in short explanation, is all the code we expect to run, but only when some dependecies we define change, like **useEffect(() => {..code we want to run}, dependeciesArray[])**

  - render() method is replaced by the return call, that just returns the JSX code

## DOM Manipulation

- What React does to apply changes for the DOM is that, updating the real DOM is likely to spend too much computational to do it, so React creates first a virtual copy of the real DOM(VirtualDOM) using JS(which is faster for making these updates operation on this alternate JS version of the DOM) and then makes this as a snapshot for reference, then creates another copy of the VirtualDOM(VirtualDOMCopy) to look for the changes, for example, changes fired from update on state or new props passed down to a component. So, when the VirtualDOMCopy have changed the state and all updates are applied, it's compared with the VirtualDOM snapshot to highlight the differences between them, with this information, these changes are applied too for the RealDOM all in once, and the iteration of changes are only on the VirtualDOMCopy using the JS DOM representation to reach the final result.
