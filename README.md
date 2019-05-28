# About hooks

- functions instead of classes -> no need to toggle between function/class
- can have several of each hook type in one function -> easier to separate concerns
- hooks must be on top level, lint rules to help identifying issues

## useState

```
[count, setCount] = useState(0)
```

- instead of setState
- each state variable can have it's own hook. But objects OK too.
- returns a pair of state & set functin in array
- input default state
- input can be function e.g. in which case it is run once

## useEffect

```
useEffect(() => {
    document.title = `You clicked ${count} times`;
})

useEffect(() => {
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, []);
```

- instead of lifecycleMethods - componentDidMount, componentDidUpdate, componentWillUnmount
- default - no 2nd prop => run every render
- 2nd prop [] => run only once
- 2nd prop e.g [count] => run when count updates
- can optionally contain cleanup function

## useRef

```
const inputRef = useRef()
useEffect(() => {
  inputRef.current.focus()
}, [])
```

- instead of createRef
- allows using refs in a function, e.g. for focus
- makes possible to store value, which does not cause render similar to when using instance props

## custom hooks

```
const {width, height} = useWindowSize();
```

- implementation in https://github.com/streamich/react-use/blob/master/src/useWindowSize.ts
- usage example in https://github.com/streamich/react-use/blob/master/docs/useWindowSize.md
- must start with use
- makes reusing state very easy

## Next

- useRedux
- useContext

# Basic Create react app instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
