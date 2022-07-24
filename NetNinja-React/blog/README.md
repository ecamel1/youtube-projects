## Playlist Link
Reviewing the fundementals of react from the [Full React Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

React uses JSX, A transpiler called Babel converts JSX to html + renders JSX
---

class in JSX !== className in JSX
className in JSX will be converted to class in html

---
### We can display numbers, strings, or arrays in JSX
But Booleans and objects we cannot

EX:
```
function App() {
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <div className="content">

        <p>{10}, {"Hello"}, {[1,2,3]}, {Math.random() * 10}</p>
        <a href={ link }>Google </a>

      </div>
    </div>
  );
}
```
---

## The Root Compoent is App.js (#5 beginning)
*All componets that branches from the root compoent also applies the App.css
For smaller projects use the index.css like a global stylesheet

## Inline css in JSX
Use camel case: background-color: '#f1356d'
becomes backgroundColor: '#f1356d'