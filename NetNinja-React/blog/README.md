# https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d

React uses JSX, A transpiler called Babel converts JSX to html + renders JSX
===
class in JSX !== className in JSX
className in JSX will be converted to class in html
===
We can display numbers, strings, or arrays

EX:
```
function App() {
  const title = "Welcome to the New Blog";

  return (
    <div className="App">
        <h1>{ title }</h1>
    </div>
  );
}
```

But Booleans and objects we cannot
===